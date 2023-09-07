import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-ngdocheck',
  templateUrl: './ngdocheck.component.html',
  styleUrls: ['./ngdocheck.component.css']
})
export class NgdocheckComponent implements DoCheck{


  ///called  when any change in angular 
  ngDoCheck(): void {
      console.log('ng do check');
      
  }

}
