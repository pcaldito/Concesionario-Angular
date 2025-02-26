import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appAppCoche]'
})
export class AppCocheDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color ='red';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = 'black';
  }
}
