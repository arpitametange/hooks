import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-on-changes',
  templateUrl: './ng-on-changes.component.html',
  styleUrls: ['./ng-on-changes.component.css']
})
export class NgOnChangesComponent implements OnChanges {

@Input() input!:string;

constructor(){
console.log(this.input);

}

  //called when there is change in input value else will not called
  ngOnChanges(changes: SimpleChanges): void {
console.log('ngonchanges',changes);
for(const propname in changes) {
      const prop = changes[propname];
      console.log('after loop', prop);

      const { previousValue, currentValue, firstChange} = prop;

      console.log(`Prop name ${propname}`);
      console.log(`Prev value ${previousValue}`);
      console.log(`Current value ${currentValue}`);
      console.log(`First chnage ${firstChange}`);

      console.log("--------------------");

    }
  }

}
