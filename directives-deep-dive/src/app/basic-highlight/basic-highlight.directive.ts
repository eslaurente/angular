import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
    console.log(this.element);
    
    (<HTMLElement>this.element.nativeElement).style.backgroundColor = 'lightgreen';
  }
}
