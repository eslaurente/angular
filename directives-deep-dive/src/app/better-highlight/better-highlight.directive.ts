import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';


// config object interface
interface betterHighlightConfig {
  defaultColor?: string | null,
  highlightColor: string
};

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input('appBetterHighlight') config: betterHighlightConfig;
  @HostBinding('style.backgroundColor') backgroundColor: string | null;

  // Using new Renderer2 class
  constructor(private element: ElementRef, 
              private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'lightblue');
    this.backgroundColor = this.config.defaultColor !== undefined ? this.config.defaultColor : null;
  }
  
  @HostListener('mouseenter')
  onMouseEnter($event: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'lightblue');
    this.backgroundColor = this.config.highlightColor; 
  }

  @HostListener('mouseleave')
  onMouseLeave($event: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', null);
    this.backgroundColor = this.config.defaultColor;
  }
}
