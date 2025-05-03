import { Component, EventEmitter, Input,Output, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-rating',
  imports: [NgFor],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnInit,OnChanges{

  @Input() rating:number = 4.5;
  startWidth:number = 0
  
  star = Array.from(Array(5).keys());

  @Output() chRating = new EventEmitter<number>();
  constructor(){
    console.log(this.rating);
  }
  ngOnChanges(): void {
    console.log("inside ng onchange",this.rating);
    this.startWidth = this.rating*16;
  }
  ngOnInit(): void {
    console.log("inside ngOn Init"); 
  }
  onChange(rating:number): void{
    this.chRating.emit(rating);  
  }

}
