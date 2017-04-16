import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// Opposite of ngIf
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.containerRef.createEmbeddedView(this.templateRef);
      // display something
    }
    else {
      this.containerRef.clear();
      // display nothing
    }
  }

  constructor(private templateRef: TemplateRef<any>, private containerRef: ViewContainerRef) { }
}
