import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product1 } from './products';

import { catchError, delay, filter, interval, map, Observable, of ,pipe, retry, shareReplay, Subject, Subscription, throwError, timeInterval} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductserService {

  private cnt:number = 0;

  cartcnt$ = new Subject<number>();
  //  constructor(){
    
  //  }
   
  incCnt() :void{
   this.cnt = this.cnt+1;
   this.cartcnt$.next(this.cnt); 
  }
  decCnt() :void{
      this.cnt = this.cnt-1;
      this.cartcnt$.next(this.cnt); 
  }
  // getCnt() :number{
  //   return this.cnt;
  // }

  constructor(private http:HttpClient){
   
  }
  getProduct():Observable<product1[]>{
    return this.http.get<product1[]>('http://localhost:3000/product')
    .pipe(
      delay(5000),
      // retry(1),
      catchError(this.handleError)
    )
  }

  getProductById(id:string):Observable<product1>{
    return this.http.get<product1>(`http://localhost:3000/product/${id}`)
    .pipe(
      catchError(this.handleError)
    )
  }
  
  handleError(err:HttpErrorResponse){
    console.log(err.status);
    let msg = ''
    if(err.status === 0){
       msg = `Client side error ${err}`;
    }else{
      msg = `Client side error with status ${err.status} and message ${err.message}`;
    }
    return throwError(()=>msg);
}
}
