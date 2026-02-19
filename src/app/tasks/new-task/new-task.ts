import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  cancel = output<void>();
  save = output<{ title: string; summary: string; dueDate: string }>();

  onCancel() {
    this.cancel.emit();
  }

  onSave() {
    this.save.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    });
  }
}
