import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ElementRef, ViewChild, ContentChild } from '@angular/core';
import { ServerElement } from "app/shared/server-element.model";

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() element: ServerElement;
  @ViewChild('panelHeading') panelHeading: ElementRef;  // ngAfterViewInit
  @ContentChild('contentParagraph') contentParagraph: ElementRef;

  constructor() {
    console.log('ServerElementComponent constructor');
    
  }

  ngOnInit() {
    console.log('ServerElementComponent ngOnInit: panelHeading: ' + (<HTMLDivElement>this.panelHeading.nativeElement).textContent, ' | contentParagraph: ', this.contentParagraph.nativeElement.textContent);
    
  }
  
  ngAfterViewChecked(): void {
    console.log('ServerElementComponent ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('ServerElementComponent ngAfterViewInit : panelHeading: ' + (<HTMLDivElement>this.panelHeading.nativeElement).textContent, ' | contentParagraph: ', this.contentParagraph.nativeElement.textContent);
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ServerElementComponent ngOnChanges', changes);
  }
  
  ngDoCheck(): void {
    console.log('ServerElementComponent ngDoCheck');  
  }

  ngAfterContentInit(): void {
    console.log('ServerElementComponent ngAfterContentInit: contentParagraph: ', ' | contentParagraph: ', this.contentParagraph.nativeElement.textContent);
  }
  
  ngAfterContentChecked(): void {
    console.log('ServerElementComponent ngAfterContentChecked');
  }

  ngOnDestroy(): void {
    console.log('ServerElementComponent ngOnDestroy');
  }
}
