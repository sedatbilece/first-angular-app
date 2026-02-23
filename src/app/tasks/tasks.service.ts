import { Injectable, signal, effect } from '@angular/core';
import { TaskType } from './task/task.model';

const STORAGE_KEY = 'tasks';
 
@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = signal<TaskType[]>(this.loadFromStorage());

  constructor() {
    effect(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.tasks()));
    });
  }

  private loadFromStorage(): TaskType[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

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
