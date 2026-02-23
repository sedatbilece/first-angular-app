import { Injectable, signal } from '@angular/core';
import { TaskType } from './task/task.model';
import { dummyTasks } from '../../dummy-tasks';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = signal<TaskType[]>(dummyTasks);

  getUserTasks(userId: string): TaskType[] {
    return this.tasks().filter((task) => task.userId === userId);
  }

  addTask(
    taskData: { title: string; summary: string; dueDate: string },
    userId: string
  ) {
    this.tasks.update((tasks) => [
      ...tasks,
      {
        id: 't' + Date.now(),
        userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.dueDate,
      },
    ]);
  }

  completeTask(taskId: string) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== taskId));
  }
}
