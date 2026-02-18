import { Component, input } from '@angular/core';
import { Task } from './task/task';
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
}
