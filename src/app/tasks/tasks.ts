import { Component, computed, input, signal } from '@angular/core';
import { Task } from './task/task';
import { dummyTasks } from '../../dummy-tasks';
type UserType = {
  id: string;
  name: string;
  avatar: string;
};

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  user = input.required<UserType>();

  private completedTaskIds = signal<Set<string>>(new Set());

  tasks = computed(() =>
    dummyTasks.filter(
      task => task.userId === this.user().id && !this.completedTaskIds().has(task.id)
    )
  );

  onTaskCompleted(taskId: string) {
    this.completedTaskIds.update(ids => {
      const updated = new Set(ids);
      updated.add(taskId);
      return updated;
    });
  }
}
