import { Component, computed, inject, input, signal } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { TasksService } from './tasks.service';

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
  private tasksService = inject(TasksService);

  user = input.required<UserType>();
  isAddingTask = signal(false);

  tasks = computed(() => this.tasksService.getUserTasks(this.user().id));

  onTaskCompleted(taskId: string) {
    this.tasksService.completeTask(taskId);
  }

  onAddTask() {
    this.isAddingTask.set(true);
  }

  onCancelAddTask() {
    this.isAddingTask.set(false);
  }

  onSaveTask(taskData: { title: string; summary: string; dueDate: string }) {
    this.tasksService.addTask(taskData, this.user().id);
    this.isAddingTask.set(false);
  }
}
