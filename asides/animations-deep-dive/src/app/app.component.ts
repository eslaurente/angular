import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        'transform': 'translateX(0px)'
      })),
      state('highlight', style({
        'background-color': 'blue',
        'transform': 'translateX(100px)'
      })),
      transition('normal <=> highlight', animate(300))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        'transform': 'translateX(0px) scale(1)'
      })),
      state('highlight', style({
        'background-color': 'blue',
        'transform': 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        'transform': 'translateX(0px) scale(0.5)'
      })),
      transition('normal => highlight', animate(300)),
      transition('highlight => normal', animate(800)),
      transition('shrunken <=> *', animate(1000))
    ])
  ]
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAnimate() {
    this.state === 'normal' ? this.state = 'highlight' : this.state = 'normal';
    this.wildState === 'normal' ? this.wildState = 'highlight' : this.wildState = 'normal';
  }

  onShrink() {
    this.wildState === 'normal' ? this.wildState = 'shrunken' : this.wildState = 'normal';
  }

  onAdd(item: string) {
    this.list.push(item);
  }

  onDelete(item: string) {
    this.list.splice(this.list.indexOf(item), 1);
  }
}
