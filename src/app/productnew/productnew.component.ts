import { Component, OnInit } from '@angular/core';
import { CommonModule, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { ConvertToSpacePipe } from '../convert-to-space.pipe';
import { HighlightDirective } from '../highlight.directive';
import { RatingComponent } from '../rating/rating.component';
import { ProductserService } from '../productser.service';
import { product1 } from '../products';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-productnew',
  imports: [RouterLink,RatingComponent,HighlightDirective,CommonModule,UpperCasePipe,LowerCasePipe,ConvertToSpacePipe],
  templateUrl: './productnew.component.html',
  styleUrl: './productnew.component.css'
})
export class ProductnewComponent implements OnInit{


   product:product1[] = [];
      // {
      //   login: "pranit",
      //   id: 1286765,
      //   avatar_url: "https://avatars.githubusercontent.com/u/1286765?v=4",
      //   html_url: "https://github.com/pranit",
      //   price:3000,
      //   code: 'M-001',
      //   des:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium ad nulla vel non ut saepe aspernatur fuga cumque sapiente laboriosam! Iure odit quis voluptatibus eveniet labore exercitationem dolor aliquid quae?",
      //   rating:5
      // },
      // {
      //   login: "pranit21",
      //   id: 2182438,
      //   avatar_url: "https://avatars.githubusercontent.com/u/2182438?v=4",
      //   html_url: "https://github.com/pranit21",
      //   price:3000,
      //   code: 'M-002',
      //    des:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium ad nulla vel non ut saepe aspernatur fuga cumque sapiente laboriosam! Iure odit quis voluptatibus eveniet labore exercitationem dolor aliquid quae?",
      //    rating:4.6
      //   },
      // {
      //   login: "pranith",
      //   id: 1878910,
      //   avatar_url: "https://avatars.githubusercontent.com/u/1878910?v=4",
      //   html_url: "https://github.com/pranith",
      //   price:3000,
      //   code: 'M-003',
      //    des:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium ad nulla vel non ut saepe aspernatur fuga cumque sapiente laboriosam! Iure odit quis voluptatibus eveniet labore exercitationem dolor aliquid quae?"
      //    , rating:5
      //   },
      // {
      //   login: "sawant-pranit",
      //   id: 4906191,
      //   avatar_url: "https://avatars.githubusercontent.com/u/4906191?v=4",
      //   html_url: "https://github.com/sawant-pranit",
      //   price:3000,
      //   code: 'M-004',
      //    des:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium ad nulla vel non ut saepe aspernatur fuga cumque sapiente laboriosam! Iure odit quis voluptatibus eveniet labore exercitationem dolor aliquid quae?"
      //    , rating:3.5
      //   },
      // {
      //   login: "pranitb10",
      //   id: 43945352,
      //   avatar_url: "https://avatars.githubusercontent.com/u/43945352?v=4",
      //   html_url: "https://github.com/pranitb10",
      //   price:3000,
      //   code: 'M-005',
      //    des:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium ad nulla vel non ut saepe aspernatur fuga cumque sapiente laboriosam! Iure odit quis voluptatibus eveniet labore exercitationem dolor aliquid quae?"
      //    ,rating:5
      //   },
      // {
      //   login: "Pranit5895",
      //   id: 53489662,
      //   avatar_url: "https://avatars.githubusercontent.com/u/53489662?v=4",
      //   html_url: "https://github.com/Pranit5895",
      //   price:3000,
      //   code: 'M-006',
      //    des:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium ad nulla vel non ut saepe aspernatur fuga cumque sapiente laboriosam! Iure odit quis voluptatibus eveniet labore exercitationem dolor aliquid quae?"
      //    ,rating:5
      //   },
      // {
      //   login: "pranita09",
      //   id: 66015794,
      //   avatar_url: "https://avatars.githubusercontent.com/u/66015794?v=4",
      //   html_url: "https://github.com/pranita09",
      //   price:3000,
      //   code: 'M-007',
      //    des:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium ad nulla vel non ut saepe aspernatur fuga cumque sapiente laboriosam! Iure odit quis voluptatibus eveniet labore exercitationem dolor aliquid quae?"
      //   , rating:2.8
      //   },
      // {
      //   login: "PranitRohokale",
      //   id: 72683329,
      //   avatar_url: "https://avatars.githubusercontent.com/u/72683329?v=4",
      //   html_url: "https://github.com/PranitRohokale",
      //   price:3000,
      //   code: 'M-008',
      //    des:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium ad nulla vel non ut saepe aspernatur fuga cumque sapiente laboriosam! Iure odit quis voluptatibus eveniet labore exercitationem dolor aliquid quae?"
      //  , rating:5
      //   },
      // {
      //   login: "pranithk",
      //   id: 450543,
      //   avatar_url: "https://avatars.githubusercontent.com/u/450543?v=4",
      //   html_url: "https://github.com/pranithk",
      //   price:3000,
      //   code: 'M-008',
      //    des:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium ad nulla vel non ut saepe aspernatur fuga cumque sapiente laboriosam! Iure odit quis voluptatibus eveniet labore exercitationem dolor aliquid quae?"
      //   , rating:5
      //   },
      // {
      //   login: "pranitlama",
      //   id: 89031785,
      //   avatar_url: "https://avatars.githubusercontent.com/u/89031785?v=4",
      //   html_url: "https://github.com/pranitlama",
      //   price:3000,
      //   code: 'M-009',
      //    des:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium ad nulla vel non ut saepe aspernatur fuga cumque sapiente laboriosam! Iure odit quis voluptatibus eveniet labore exercitationem dolor aliquid quae?"
      //   , rating:3.9
      //   },
      // {
      //   login: "PRAN20",
      //   id: 65455865,
      //   avatar_url: "https://avatars.githubusercontent.com/u/65455865?v=4",
      //   html_url: "https://github.com/PRAN20",
      //   price:3000,
      //   code: 'M-010',
      //    des:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium ad nulla vel non ut saepe aspernatur fuga cumque sapiente laboriosam! Iure odit quis voluptatibus eveniet labore exercitationem dolor aliquid quae?"
      //   , rating:5
      //   }
  //]
 
  err_msg = null;
  loading = false;
  ngOnInit(): void {
    this.loading = true;
    this.prouctser.getProduct().subscribe({
      next:p =>{
        this.loading = false;
        console.log(p);
        this.product = p;
      } ,
      error:e=>{
        console.log(e);
        this.err_msg = e;
        console.log(this.err_msg); 
      }
    });
  }
  
  
   curr_date = new Date();

   onRatingChange(p:any,event:number){
     p.rating = event;
   }
    constructor(private prouctser:ProductserService){}
    
   addToCart(event:any,p:any):void{
    console.log(event);
    console.log(p);
  // this.Cartcnt1Component.incCnt(); 
    this.prouctser.incCnt();
   }
   
}
