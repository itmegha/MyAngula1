import { JsonPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { forbidNumberVal } from '../forbidden-validator';
@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule,JsonPipe,NgIf,NgFor],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
// nameCntr = new FormControl('');

// updateName(){
//   this.nameCntr.setValue('megha');
// }

 profileForm:FormGroup;
constructor(private fb:FormBuilder){
  this.profileForm = this.fb.group({
    fname:['',[Validators.required,Validators.minLength(3),forbidNumberVal]],
    lname:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.minLength(3),Validators.maxLength(8)]],
    address: this.fb.group({
     street:[''],
     city: [''],
     state: [''],
     zipcode:['']
    }),
    mobileNumber:this.fb.array([
      this.fb.control('')
    ])
 });
}

get mobileNumber():FormArray{
   return this.profileForm.get('mobileNumber') as FormArray;
}

addNumber():void{
    this.mobileNumber.push(this.fb.control(''));
}

get fnameCntr():FormControl{
  return this.profileForm.get('fname') as FormControl;
}
onSubmit(){
  console.log(this.profileForm.value);
}

updateData() :void{
   this.profileForm.patchValue({
     fname : 'Megha',
     address:{
      city:'Pune'
     }
    });
}
}
