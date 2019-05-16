import {Directive, Input, ElementRef, Renderer2, HostBinding} from '@angular/core';

@Directive({
  selector: '[isVisible]'
})
export class IsVisibleDirective {
  @Input()
  isVisible: boolean;

  constructor(private element: ElementRef, private renderer2: Renderer2) {}

  @HostBinding("style.display") display;

  ngOnInit(){
    this.renderer2.setStyle(this.element.nativeElement, "display", (this.isVisible)? this.display="block": "none");
  }
}



