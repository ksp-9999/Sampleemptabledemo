import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  // constructor() { }
  // @HostListener('click') onMouseOver() {
  //   this.highlight(this.hightlightColor || 'red')
  // }
  // private hightlight(color :string){
  //   this.el.nativeElement.style.backgroundColor=color
  // }
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow'); // Change the color to any desired color
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null); // Remove the highlight when mouse leaves
  }

  private highlight(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
