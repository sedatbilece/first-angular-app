import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  imports: [CommonModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class Calculator {
  display = signal('0');
  private currentValue = 0;
  private previousValue = 0;
  private operator = '';
  private waitingForOperand = false;

  onDigit(digit: string) {
    if (this.waitingForOperand) {
      this.display.set(digit);
      this.waitingForOperand = false;
    } else {
      this.display.set(this.display() === '0' ? digit : this.display() + digit);
    }
    this.currentValue = parseFloat(this.display());
  }

  onOperator(op: string) {
    this.previousValue = this.currentValue;
    this.operator = op;
    this.waitingForOperand = true;
  }

  onEquals() {
    if (!this.operator) return;
    let result = 0;
    switch (this.operator) {
      case '+': result = this.previousValue + this.currentValue; break;
      case '-': result = this.previousValue - this.currentValue; break;
      case '×': result = this.previousValue * this.currentValue; break;
      case '÷': result = this.currentValue !== 0 ? this.previousValue / this.currentValue : 0; break;
    }
    this.display.set(String(result));
    this.currentValue = result;
    this.operator = '';
    this.waitingForOperand = true;
  }

  onClear() {
    this.display.set('0');
    this.currentValue = 0;
    this.previousValue = 0;
    this.operator = '';
    this.waitingForOperand = false;
  }
}
