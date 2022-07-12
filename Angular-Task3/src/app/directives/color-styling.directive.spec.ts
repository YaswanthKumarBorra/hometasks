import { ElementRef } from '@angular/core';
import { ColorStylingDirective } from './color-styling.directive';

describe('ColorStylingDirective', () => {

  const element: ElementRef = new ElementRef(document.createElement("h1")); 
  const directive = new ColorStylingDirective(element);

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should background Color be yellow', () => {
    expect(directive.bgColor).toBe("yellow");
  });
});
