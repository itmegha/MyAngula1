import { Component, OnInit} from '@angular/core';
import { Review } from '../review';
import { JsonPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-review',
  imports: [NgFor,FormsModule,JsonPipe,NgIf],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit{
  rev!:Review;
  rating = [1,2,3,4,5];
  constructor(){
    this.rev = new Review();
  }
  ngOnInit(): void {
    
  }

  onSubmit():void{
    console.log(this.rev); 
  }
}
