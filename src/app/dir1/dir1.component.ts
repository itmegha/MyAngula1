import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dir1',
  imports: [NgIf],
  templateUrl: './dir1.component.html',
  styleUrl: './dir1.component.css'
})
export class Dir1Component {

  show = false;
  toggle(){
    this.show = !this.show;
  }

  cnt = 0;
  inc(){
    this.cnt = this.cnt+1;
  }
  dec(){
    this.cnt = this.cnt-1;
  }
  res(){
    this.cnt = 0;
  }
  }

