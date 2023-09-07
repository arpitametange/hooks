import { Component, OnDestroy } from '@angular/core';
import { ServiceService } from './service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-use-interceptor',
  templateUrl: './use-interceptor.component.html',
  styleUrls: ['./use-interceptor.component.css']
})
export class UseInterceptorComponent implements OnDestroy {
  subscription!:Subscription ///for unsubscribe first we have to use subscription
constructor(private service:ServiceService ){
    this.getmethod()
}
  ngOnDestroy(): void {
   this.subscription.unsubscribe()  //unsubscribe using ngondestroy
  }

arry=[]
getmethod(){
 this.subscription= this.service.get().subscribe((res)=>{
    console.log('data from useinterceptor',res);
    // this.arry=res
  })
}

}
