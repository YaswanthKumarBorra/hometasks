import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appColorStyling]'
})
export class ColorStylingDirective implements OnInit{

  bgColor: string = "yellow";
  constructor(private el: ElementRef){ }
  
  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.bgColor;
  }
}
