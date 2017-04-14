import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { ServerElement } from "app/shared/server-element.model";
import { ElementType } from "app/shared/element-type";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverElementCreated = new EventEmitter<ServerElement>();
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('contentInput') contentInput: ElementRef;
  blueprintCreated;
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.addServerElement(ElementType.SERVER);
  }

  onAddBlueprint() {
    this.addServerElement(ElementType.BLUEPRINT);
  }

  private addServerElement(elementType: ElementType) {
    this.newServerName = this.nameInput.nativeElement.value;
    this.newServerContent = this.contentInput.nativeElement.value;
    this.serverElementCreated.emit(new ServerElement(ElementType[elementType], this.newServerName, this.newServerContent));
  }
}
