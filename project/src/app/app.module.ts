import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { FormsModule } from '@angular/forms';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { NgOnChangesComponent } from './ng-on-changes/ng-on-changes.component';
import { NgdocheckComponent } from './ngdocheck/ngdocheck.component';
import { UseInterceptorComponent } from './use-interceptor/use-interceptor.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { InterceptorInterceptor } from './use-interceptor/interceptor.interceptor';
import { OndestroyComponent } from './ondestroy/ondestroy.component';
// import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    ViewchildComponent,
    NgOnChangesComponent,
    NgdocheckComponent,
    UseInterceptorComponent,
    OndestroyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
   { provide:HTTP_INTERCEPTORS,
    useClass:InterceptorInterceptor ,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
