import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements AfterContentInit,AfterContentChecked {

  @Input() input:any
  @Output() outputmethod:EventEmitter<string>=new EventEmitter()
  @ContentChild("child", { static: false })
  child !: ElementRef;
  constructor(){
    console.log(this.input);

  }

  click(){
    this.outputmethod.emit('emith the value')
    
  }
  ngAfterContentInit(): void {
   console.log('HooksComponent ********ngAfterContentINIT*******called',this.input);
  }
  ngAfterContentChecked(): void {
    console.log('HooksComponent ********ngAfterContentChecked *******called');
    this.child.nativeElement.setAttribute('style', `color:${this.input}`)
  }
}
