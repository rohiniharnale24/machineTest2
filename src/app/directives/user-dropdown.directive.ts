import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUserDropdown]',
})
export class UserDropdownDirective implements OnInit {
  constructor(private _eleRef: ElementRef, private _render: Renderer2) {}
  ngOnInit(): void {
    this._render.addClass(this._eleRef.nativeElement, 'dropdown-item');
  }
}
// import { Directive, HostBinding, HostListener } from '@angular/core';

// @Directive({
//   selector: '[appUserDropdown]',
// })
// export class UserDropdownDirective {
//   @HostBinding('class.open') isOpen = false;

//   @HostListener('click') toggleopen() {
//     this.isOpen = !this.isOpen;
//   }
// }
