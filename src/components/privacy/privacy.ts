import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { contactService } from '../../services/contactService';

@Component({
  selector: 'app-privacy',
  imports: [ReactiveFormsModule],
  templateUrl: './privacy.html',
  styleUrl: './privacy.css',
})
export class Privacy {
  contactsFormDemo!: FormGroup
  btnStatus:string='Send Message'
   compId:number=35;


constructor(
private _fb         : FormBuilder,
private _toastr    : ToastrService,
private _service   : contactService
){}

 ngOnInit(): void {
    this.createForm();
 }

  createForm(){
    this.contactsFormDemo = this._fb.group({
      id                    : [0],
      compId                : [ this.compId],
      yourName              : ['', Validators.required],
      email                 : ['', [Validators.required, Validators.email]],
      phone                 : ['', [Validators.required, Validators.pattern(/^01[3-9]\d{8}$/)]],
      subject               : ['', Validators.required],
      message               : ['', Validators.required],
    });
  }

onSubmit(): void {

  if (this.contactsFormDemo.invalid) {
    this.contactsFormDemo.markAllAsTouched();
    this._toastr.error('Please fill in all required fields.');
    return;
  }

  this._service.saveContact(this.contactsFormDemo.value).subscribe({
    
    next: (res: any) => {
      if (res?.status) {
        this._toastr.success('Data saved successfully.', 'Success');
        this.reset();
      } else {
        this._toastr.error(res?.message || 'Data could not be saved.');
      }

    },

    error: (err) => {
      console.error(err);
      this._toastr.error('Server error. Please try again later.');
    }
  });

}

  isEdit:boolean=false;


  reset(){
    this.createForm();
    this.btnStatus='Send Message';
   }



}
