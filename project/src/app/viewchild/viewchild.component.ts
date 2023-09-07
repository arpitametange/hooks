import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements AfterViewInit, AfterViewChecked {

parent1:string='red'
@ViewChild('childview', { static: false }) child!: ElementRef;  


  constructor(){
    console.log(this.parent1)}

  ngAfterViewChecked(): void {
    console.log('NG AFTER VIEW CHECKED',this.child);
    this.child.nativeElement.setAttribute('style', `color:${this.parent1}`)
  }

  ngAfterViewInit(): void {
    console.log('NG AFTER VIEW IN IT',this.child);
    this.child.nativeElement.setAttribute('style', `color:${this.parent1}`)
  }

  
  add(){
    this.parent1='blue'
  }
  
}
