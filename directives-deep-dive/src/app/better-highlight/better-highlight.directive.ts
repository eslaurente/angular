import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // Using new Renderer2 class
  constructor(private element: ElementRef, 
              private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'lightblue');
  }
  
  @HostListener('mouseenter')
  onMouseEnter($event: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'lightblue');  
  }

  @HostListener('mouseleave')
  onMouseLeave($event: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', null);  
  }
}
