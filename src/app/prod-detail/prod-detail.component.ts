import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProductserService } from '../productser.service';
import { Observable } from 'rxjs';
import { product1 } from '../products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prod-detail',
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './prod-detail.component.html',
  styleUrl: './prod-detail.component.css'
})
export class ProdDetailComponent implements OnInit,OnDestroy{

  prod$!:Observable<product1>;
  id1!:string|null;

  constructor(private route:ActivatedRoute,
    private product:ProductserService,
    private router:Router
  ){}
  

  //{
    // this.id1 = this.route.snapshot.paramMap.get('id');
    // console.log(this.id1);
    // if(this.id1){
    //  this.prod$ =  this.product.getProductById(this.id1); 
    // } 
    ngOnInit(): void 
   {
    this.route.paramMap.subscribe(paramMap=>{
      this.id1 = paramMap.get('id');
      console.log(this.id1); 
      if(this.id1){
        console.log(this.id1);
         this.prod$ =  this.product.getProductById(this.id1); 
    } 
    })
  }

  goback():void{
    setTimeout(()=>{
        this.router.navigate(['/about'])
      },1000);
  }

  goPrev():void{
    if(this.id1){
      const id = +this.id1;
      this.router.navigate(['/pdetail',(id-1)])
    }
  }
  goNext():void{
    if(this.id1){
      const id = +this.id1;
      this.router.navigate(['/pdetail',(id+1)])
    }
  }

  *ngOnDestroy(){
    console.log("done");
    
  }
}
