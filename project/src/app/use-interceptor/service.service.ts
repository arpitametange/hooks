import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url= 'https://referential.p.rapidapi.com/v1/country'

  constructor(private http:HttpClient) { 

  }

 get(){
   let  params=new  HttpParams()
    params=params.append('fields','currency,currency_num_code,currency_code,continent_code,currency,iso_a3,dial_code')
    params=params.append('limit','250')
    return this.http.get(this.url,{params:params}).pipe(catchError(this.handleErrror))
 }
 
 handleErrror(error:HttpErrorResponse){
  let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  
 }
}
