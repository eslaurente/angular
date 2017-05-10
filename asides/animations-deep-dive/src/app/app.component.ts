import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  list = ['Milk', 'Sugar', 'Bread'];

  onAdd(item: string) {
    this.list.push(item);
  }

  onDelete(item: string) {
    this.list.splice(this.list.indexOf(item), 1);
  }
}
