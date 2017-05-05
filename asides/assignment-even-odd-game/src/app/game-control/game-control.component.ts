import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  private STARTING_NUMBER = 0;
  @Output() intervalFired = new EventEmitter<number>();
  timerReference: any;
  counter: number;

  constructor() { }

  ngOnInit(): void {
    this.counter = this.STARTING_NUMBER;
  }

  onStart(): void {
    this.timerReference = setInterval(() => {
      this.intervalFired.emit(this.counter++);      
    }, 1000);
  }

  onPause(): void {
    clearInterval(this.timerReference);    
  }
}
