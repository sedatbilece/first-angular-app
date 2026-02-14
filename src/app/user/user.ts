import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-user';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  protected readonly users = DUMMY_USERS;

  selectedUser = this.users[randomIndex];
}
