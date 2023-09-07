import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ondestroy',
  templateUrl: './ondestroy.component.html',
  styleUrls: ['./ondestroy.component.css']
})
export class OndestroyComponent implements OnDestroy {
  show=true

  ngOnDestroy(): void {
    console.log('ng on destroy');
    this.show=false

  }


  



}
