import { Component } from '@angular/core';
import { ServerElement } from "app/shared/server-element.model";
import { ElementType } from "app/shared/element-type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ElementType = ElementType;

  serverElements: [ServerElement] = [
    new ServerElement(ElementType.SERVER, 'Test Server', 'This is just a test')
  ];
  

  onServerElementAdded(data: ServerElement) {
    this.serverElements.push(data);
  }
}
