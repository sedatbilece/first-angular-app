import { Component, computed, input, signal } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { dummyTasks } from '../../dummy-tasks';
import { TaskType } from './task/task.model';

type UserType = {
  id: string;
  name: string;
  avatar: string;
};

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  user = input.required<UserType>();
  isAddingTask = signal(false);

  private completedTaskIds = signal<Set<string>>(new Set());
  private addedTasks = signal<TaskType[]>([]);

  tasks = computed(() => {
    const allTasks = [...dummyTasks, ...this.addedTasks()];
    return allTasks.filter(
      task => task.userId === this.user().id && !this.completedTaskIds().has(task.id)
    );
  });

  onTaskCompleted(taskId: string) {
    this.completedTaskIds.update(ids => {
      const updated = new Set(ids);
      updated.add(taskId);
      return updated;
    });
  }

  onAddTask() {
    this.isAddingTask.set(true);
  }

  onCancelAddTask() {
    this.isAddingTask.set(false);
  }

  onSaveTask(taskData: { title: string; summary: string; dueDate: string }) {
    const newTask: TaskType = {
      id: 't' + Date.now(),
      userId: this.user().id,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    };
    this.addedTasks.update(tasks => [...tasks, newTask]);
    this.isAddingTask.set(false);
  }
}
