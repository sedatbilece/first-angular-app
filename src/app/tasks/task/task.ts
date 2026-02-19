import { Component ,input,computed} from '@angular/core';
import { TaskType } from './task.model';
@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
task = input.required<TaskType>();

}
