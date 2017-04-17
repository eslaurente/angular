import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor() { }

  @HostListener('click')
  onClick() {
    this.toggleOpen();
  }

  // @HostListener('mouseleave')
  // onFoucsout() {
  //   this.toggleOpen();
  // }

  private toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
