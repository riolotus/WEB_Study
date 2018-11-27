import { Directive,HostBinding } from '@angular/core';
// import { Directive,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMydir]'
})
export class MydirDirective {

  constructor() {}
  // constructor(private ele:ElementRef,private rend:Renderer2) { 

  // }
  // ngOnInit(){
  //   this.rend.addClass(this.ele.nativeElement,'appMydir');
  // }

  @HostBinding() innerHTML='emmmmm';

}
