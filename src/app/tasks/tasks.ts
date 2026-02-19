import { Component, computed, input } from '@angular/core';
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

  tasks = computed(() => dummyTasks.filter(task => task.userId === this.user().id));
}
