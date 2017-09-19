import {HostListener, HostBinding,  Directive} from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') get opened(){
    return this.isOpen;
  }
  // tslint:disable-next-line:one-line
  @HostListener('click') open(){
    this.isOpen = true;
  }
  // tslint:disable-next-line:one-line
  @HostListener('mouse  leave') close(){
    this.isOpen = false;
  }
  // tslint:disable-next-line:member-ordering
  private isOpen = false;
}
