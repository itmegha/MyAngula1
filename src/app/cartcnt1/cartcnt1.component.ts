import { Component } from '@angular/core';

@Component({
  selector: 'app-cartcnt1',
  imports: [],
  templateUrl: './cartcnt1.component.html',
  styleUrl: './cartcnt1.component.css'
})
export class Cartcnt1Component {

  private cnt:number = 0;

    incCnt() :void{
     this.cnt = this.cnt+1;
     console.log(this.cnt);
     
    }

    decCnt() :void{
        this.cnt = this.cnt-1;
    }

    getCnt() :number{
      return this.cnt;
    }
}
