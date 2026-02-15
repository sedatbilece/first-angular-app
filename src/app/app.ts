import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from '../dummy-user';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Header, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
  protected readonly users = DUMMY_USERS;

  onUserSelected(id: string) {
    console.log('User selected:', id);
  }
}
