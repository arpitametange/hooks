import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  data:string='red'

  onchange(){
    this.data='blue'
  }
  anothier(data:any){
    console.log('methid',data);
    
  }
}
