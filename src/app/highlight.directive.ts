import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone:true
})
export class HighlightDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.backgroundColor = '';
   }

   @HostListener("mouseenter")
   onMouseEnter(){
    this.el.nativeElement.style.backgroundColor = 'pink';
   }

   @HostListener("mouseleave")
   onMouseLeave(){
    this.el.nativeElement.style.backgroundColor = '';
   }

}
