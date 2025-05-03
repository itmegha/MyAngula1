import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { RegformComponent } from './regform/regform.component';
import { product1 } from './products';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { CurrencyConvertPipe } from './pipe1/currency-convert.pipe';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { ProductnewComponent } from './productnew/productnew.component';
import { Dir1Component } from './dir1/dir1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';

@Component({
  selector: 'app-root',
  imports: [ProdDetailComponent,PageNotFoundComponent,RouterLink,RouterOutlet,Dir1Component,ProductnewComponent,NgFor,NgIf,CurrencyConvertPipe,DatePipe,CommonModule,FormsModule,RouterOutlet,NavComponent,RegformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true
})
export class AppComponent implements OnInit{

  arr = ['Nikki','Didi','Lusi','Wai'];

  title = 'My First App Using Angular';
  para = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatem excepturi officiis ut, ipsa at corrupti eveniet veniam quibusdam necessitatibus cumque doloremque soluta tempore. Corrupti earum voluptatum perspiciatis quidem veritatis.'
  money = 20;
  
  show = false;
  toggled(){
    this.show = !this.show;
  }

  c:number = 0;
  cnt(){
    this.c = this.c+1;
  }
  cntd(){
    if(this.c == 0){
         this.c = 0;
    }
    else{
      this.c = this.c-1;
    }
  }


  today :Date = new Date();

  product:product1[] = [];
//     {
//       login: "pranit",
//       id: 1286765,
//       avatar_url: "https://avatars.githubusercontent.com/u/1286765?v=4",
//       html_url: "https://github.com/pranit",
//       price:3000
//     },
//     {
//       login: "pranit21",
//       id: 2182438,
//       avatar_url: "https://avatars.githubusercontent.com/u/2182438?v=4",
//       html_url: "https://github.com/pranit21",
//       price:3000
//     },
//     {
//       login: "pranith",
//       id: 1878910,
//       avatar_url: "https://avatars.githubusercontent.com/u/1878910?v=4",
//       html_url: "https://github.com/pranith",
//       price:3000
//     },
//     {
//       login: "sawant-pranit",
//       id: 4906191,
//       avatar_url: "https://avatars.githubusercontent.com/u/4906191?v=4",
//       html_url: "https://github.com/sawant-pranit",
//       price:3000
//     },
//     {
//       login: "pranitb10",
//       id: 43945352,
//       avatar_url: "https://avatars.githubusercontent.com/u/43945352?v=4",
//       html_url: "https://github.com/pranitb10",
//       price:3000
//     },
//     {
//       login: "Pranit5895",
//       id: 53489662,
//       avatar_url: "https://avatars.githubusercontent.com/u/53489662?v=4",
//       html_url: "https://github.com/Pranit5895",
//       price:3000
//     },
//     {
//       login: "pranita09",
//       id: 66015794,
//       avatar_url: "https://avatars.githubusercontent.com/u/66015794?v=4",
//       html_url: "https://github.com/pranita09",
//       price:3000
//     },
//     {
//       login: "PranitRohokale",
//       id: 72683329,
//       avatar_url: "https://avatars.githubusercontent.com/u/72683329?v=4",
//       html_url: "https://github.com/PranitRohokale",
//       price:3000
//     },
//     {
//       login: "pranithk",
//       id: 450543,
//       avatar_url: "https://avatars.githubusercontent.com/u/450543?v=4",
//       html_url: "https://github.com/pranithk",
//       price:3000
//     },
//     {
//       login: "pranitlama",
//       id: 89031785,
//       avatar_url: "https://avatars.githubusercontent.com/u/89031785?v=4",
//       html_url: "https://github.com/pranitlama",
//       price:3000
//     },
//     {
//       login: "PRAN20",
//       id: 65455865,
//       avatar_url: "https://avatars.githubusercontent.com/u/65455865?v=4",
//       html_url: "https://github.com/PRAN20",
//       price:3000
//     }
// ]

ngOnInit(): void {
  
}
  addCart(event:any,p:any):void{
    console.log(event);
    alert(this.sum(10,20));
  }
  sum(a:number,b:number) :number{
    return a+b;
  }

  filProduct:any;
  constructor(){
    this.filProduct = this.product;
  }
  private _Myname  = '';
  
 
  get Myname(): string{
     return this._Myname;
  }

  set Myname(fb:string) {
   this._Myname = fb;
   this.filterData(fb);
 }

 filterData(data : string):void{
   this.filProduct = this.product.filter(p=>{
     return p.login.toLowerCase().includes(data.toLowerCase());
   });
 }
}
