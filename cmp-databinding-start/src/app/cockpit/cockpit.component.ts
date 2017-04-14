import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ServerElement } from "app/shared/server-element.model";
import { ElementType } from "app/shared/element-type";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverElementCreated = new EventEmitter<ServerElement>();
  blueprintCreated;
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverElementCreated.emit(new ServerElement(ElementType[ElementType.SERVER], this.newServerName, this.newServerContent));
  }

  onAddBlueprint() {
    this.serverElementCreated.emit(new ServerElement(ElementType[ElementType.BLUEPRINT], this.newServerName, this.newServerContent));
  }
}
