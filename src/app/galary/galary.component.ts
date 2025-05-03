import { Component, effect, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { computed } from '@angular/core';

@Component({
  selector: 'app-galary',
  imports: [],
  templateUrl: './galary.component.html',
  styleUrl: './galary.component.css'
})
export class GalaryComponent{

  // data:WritableSignal<string | number> = signal(10);
  data:WritableSignal<number> = signal(10);
  count:Signal<number> = computed(()=>10);
  updateData(){
    // this.data.set("Megha");
    // this.count.set("Neha"); can not update
    // this.data.update((v)=>v+1);  //limited use
    this.data.set(this.data()+1);
  }
  //  count1  = 1;
  //  count2 = signal(1);
  //  inc1(){
  //    this.count1 = this.count1+1;
  //  }
  //  inc2(){
  //    this.count2.set(this.count2()+1);
  //  }
  //  constructor(){
  //   effect(()=>{
  //      console.log(this.count1);
  //     // console.log(this.count2()); 
  //   })
   //}
  // constructor(private route:ActivatedRoute){}
  // ngOnInit(): void {
  //   this.route.queryParams.subscribe(q=>{
  //     console.log(q);
  //   })
  // }
}
