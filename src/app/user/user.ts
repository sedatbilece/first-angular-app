import { Component ,Input} from '@angular/core';
import { DUMMY_USERS } from '../../dummy-user';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
    @Input() avatar!: string;
    @Input() name!: string;
  
  onSelectUser() {
    console.log('User clicked:', this.name);
  }

  imagePath(): string {
    return 'assets/users/' + this.avatar;
  }
}
