import { Component, input } from '@angular/core';

type UserType = {
  id: string;
  name: string;
  avatar: string;
};

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  user = input.required<UserType>();
}
