import { Directive, HostListener } from '@angular/core';

// import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appShowHidddenDropDown]',
})
export class ShowHidddenDropDownDirective {
  constructor() {}

  @HostListener('click', ['$event'])
  onclick(eve: Event) {
    let ele1 = eve.target as HTMLElement;
    console.log(ele1);

    ele1.nextElementSibling?.classList.toggle('show');
  }
}

// @Directive({
//   selector: '[appDropdown2]',
// })
// export class Dropdown2Directive {
//   constructor() {}

//   @HostListener('click', ['$event'])
//   onClick(eve: Event) {
//     let ele = eve.target as HTMLElement;
//     // console.log(ele.closest('li')?.previousElementSibling?.children[1]);
//     // ele.closest('li')?.previousElementSibling?.classList.remove('show')

//     ele
//       .closest('li')
//       ?.previousElementSibling?.children[1].classList.remove('show');
//   }
// }
