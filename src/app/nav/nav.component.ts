import { Component, OnInit } from '@angular/core';
// import { Cartcnt1Component } from '../cartcnt1/cartcnt1.component';
import { ProductserService } from '../productser.service';
import { Subscription } from 'rxjs';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterModule,RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{

  data:string = 'mobile';   
  onInput(event :any){
    this.data = event.target.value;
  }
  countVal = 0;
      constructor(private prouctser:ProductserService){
        // setTimeout(()=>{
        //   // this.oncart();
        // },1000);
      }
   
      ngOnInit(): void {
        this.prouctser.cartcnt$.subscribe(c=>this.countVal = c);
        
       }
    //   oncart():void{
    //   if(this.sub1$){
    //     this.sub1$.unsubscribe();
    //   }
    //   this.prouctser.cartcnt$.subscribe(c=>this.countVal = c);
    //   console.log(this.countVal);
    //  }
  
     
  myClass = {
    "bg-primary":true,
    "bg-success":false
  }
  myStyle = {
    color:'white',
    backgroundColor:'red'
  }

  currentTheme = 'primary';
  chTheme() :void{
    if(this.currentTheme === 'primary'){
      this.currentTheme = 'success';
      this.myClass = {
        "bg-primary":false,
        "bg-success":true
      }
    }
    else{
      this.currentTheme = 'primary';
      this.myClass = {
        "bg-primary":true,
        "bg-success":false
      }
    }
   
  }
}
