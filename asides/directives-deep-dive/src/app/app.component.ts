import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberList = [];
  onlyOdd = false;

  constructor() {
    for (let i = 0; i < 25; i++) {
      this.numberList.push(Math.floor(Math.random() * (9999999 - 0)) + 0);
    }
  }

  filterOdds(): number[] {
    return this.numberList.filter((item) => item % 2 !== 0);
  }

  filterEvens(): number[] {
    return this.numberList.filter((item) => item % 2 === 0);
  }
}
