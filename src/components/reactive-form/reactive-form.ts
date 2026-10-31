import { CommonModule } from '@angular/common';
//import { Component,signal,viewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component } from "@angular/core";
//import { NgModule } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule,FormsModule,Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone:true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  legalForm!: FormGroup;
   btnStatus:string='Save'
   compId:number=35;

 constructor(
    private _fb         : FormBuilder
 ){}

 ngOnInit(): void {
    this.createForm();
 }

 createForm(){
    this.legalForm = this._fb.group({
      id                    : [0,[]],
      documentName          : ['', Validators.required],
      notifyDay             : ['', [Validators.required, Validators.min(0)]],
      amount                : ['', [Validators.required, Validators.min(0)]],
      providerName          : ['', Validators.required],
      compId                : [this.compId, Validators.required],
    });
  }

   reset(){
    this.createForm();
    this.btnStatus='Save';
   }

}
