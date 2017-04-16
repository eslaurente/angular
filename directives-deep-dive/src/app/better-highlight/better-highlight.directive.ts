import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: null = null;
  @Input() highlightColor: string | null = 'lightblue';
  @HostBinding('style.backgroundColor') backgroundColor: string | null;

  // Using new Renderer2 class
  constructor(private element: ElementRef, 
              private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'lightblue');
    this.backgroundColor = this.defaultColor;
  }
  
  @HostListener('mouseenter')
  onMouseEnter($event: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'lightblue');
    this.backgroundColor = this.highlightColor; 
  }

  @HostListener('mouseleave')
  onMouseLeave($event: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', null);
    this.backgroundColor = this.defaultColor;
  }
}
