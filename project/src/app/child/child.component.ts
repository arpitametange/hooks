import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements AfterContentInit,AfterContentChecked {

  @Input() input:any
  
  @ContentChild("child", { static: false })
  child !: ElementRef;
  constructor(){
console.log(this.input);

  }
  ngAfterContentInit(): void {
   console.log('HooksComponent ********ngAfterContentINIT*******called',this.input);
  }
  ngAfterContentChecked(): void {
    console.log('HooksComponent ********ngAfterContentChecked *******called');
    this.child.nativeElement.setAttribute('style', `color:${this.input}`)
  }
}
