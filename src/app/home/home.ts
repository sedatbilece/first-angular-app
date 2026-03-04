import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user/user';
import { Tasks } from '../tasks/tasks';
import { DUMMY_USERS } from '../../dummy-user';
import { UserType } from '../user/user.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule, User, Tasks],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  protected readonly users = DUMMY_USERS;
  selectedUser = signal<UserType | undefined>(undefined);

  onUserSelected(id: string) {
    const selectedUser = this.users.find(user => user.id === id);
    if (selectedUser) {
      this.selectedUser.set(selectedUser);
    }
  }
}
