import {Directive, Input, ElementRef, Renderer2, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[makeBigger]'
})
export class MakeBiggerDirective {

  constructor(private element: ElementRef, private renderer2: Renderer2){}
  @HostBinding("style.fontSize")initialFont="20px";

  @HostListener("dblclick") biggerByTwoPX() {
    this.renderer2.setStyle(this.element.nativeElement, "font-size", parseInt(this.initialFont)+2+"px");
  }
}


