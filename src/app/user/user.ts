import { Component ,input,computed,Output,EventEmitter,output} from '@angular/core';
import { DUMMY_USERS } from '../../dummy-user';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  avatar = input.required<string>(); 
  name = input.required<string>();
  id = input.required<string>();
  //@Output() userSelected = new EventEmitter<string>();
  userSelected = output<string>();

  imagePath = computed(() => 'assets/users/' + this.avatar());

  onSelectUser() {
    console.log('User clicked:', this.name());
    this.userSelected.emit(this.id());
  }

}
