import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
    (<HTMLElement>this.element.nativeElement).style.backgroundColor = 'lightgreen';
  }
}
