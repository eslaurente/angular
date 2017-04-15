import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(currentNumber: number) {
    if (currentNumber % 2 === 0) {
      this.evenNumbers.unshift(currentNumber);
    }
    else {
      this.oddNumbers.unshift(currentNumber);
    }
  }
}
