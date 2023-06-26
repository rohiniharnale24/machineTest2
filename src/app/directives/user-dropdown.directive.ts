import { Directive, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  @HostListener('click', ['$event'])
  onClick(eve: Event) {
    let ele = eve.target as HTMLElement;
    console.log(ele.closest('li')?.nextElementSibling?.children[1]);
    ele.closest('li')?.nextElementSibling?.children[1].classList.remove('show');
  }
}
