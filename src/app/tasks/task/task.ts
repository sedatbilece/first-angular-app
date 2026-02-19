import { Component ,input,computed, output, EventEmitter} from '@angular/core';
import { TaskType } from './task.model';
@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
task = input.required<TaskType>();
taskCompleted = output<string>();
onCompleteTask() {
  console.log('Task completed:', this.task().id);
  this.taskCompleted.emit(this.task().id);
}
}
