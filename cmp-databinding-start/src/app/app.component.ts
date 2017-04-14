import { Component } from '@angular/core';
import { ServerElement } from "app/shared/server-element.model";
import { ElementType } from "app/shared/element-type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: [ServerElement] = [
    new ServerElement(ElementType[ElementType.SERVER], 'Test Server', 'This is just a test')
  ];
  

  onServerElementAdded(data: ServerElement) {
    this.serverElements.push(data);
  }
}
