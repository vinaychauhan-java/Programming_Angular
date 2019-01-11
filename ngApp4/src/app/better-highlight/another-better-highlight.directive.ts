import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAnotherBetterHighlight]'
})
export class AnotherBetterHighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elRef: ElementRef) { }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.backgroundColor = 'transparent';
  }

}
