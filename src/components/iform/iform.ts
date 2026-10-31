import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-iform',
  imports: [
    
    ReactiveFormsModule,
    
  ],
  templateUrl: './iform.html',
  styleUrl: './iform.css',
})
export class Iform {
  contactFormDemo!: FormGroup
  btnStatus:string='Send Message'
   compId:number=35;


constructor(
  private _fb         : FormBuilder,
  private _toastr    : ToastrService,
){}

ngOnInit(): void {
    this.createForm();
 }

  createForm(){
    this.contactFormDemo = this._fb.group({
      id                    : [0],
      compId                :[ this.compId],
      yourName              : ['', Validators.required],
      email                 : ['', [Validators.required, Validators.email]],
      phone                 : ['', [Validators.required, Validators.pattern(/^01[3-9]\d{8}$/)]],
      subject               : ['', Validators.required],
      message               : ['', Validators.required],
    });

  }

onSubmit(): void {
  

  if (this.contactFormDemo.invalid) {
    this.contactFormDemo.markAllAsTouched();
    this._toastr.error('Please fill in all required fields.');
    return;
  }

  this.btnStatus = "Sending...";

  emailjs.send(
    'service_8psxucb',
    'template_wcggvcq',
    {
      yourName: this.contactFormDemo.value.yourName,
      email: this.contactFormDemo.value.email,
      phone: this.contactFormDemo.value.phone,
      subject: this.contactFormDemo.value.subject,
      message: this.contactFormDemo.value.message,
    },
    '7NcGpDKTOm1Z_-gU8'
  )
  .then(() => {

    this._toastr.success('Message sent successfully.', 'Success');

    this.reset();

  })
    .catch((error) => {

      console.error(error);

      this._toastr.error('Failed to send message.');

    })
  .finally(() => {

    this.btnStatus = 'Send Message';

  });

}


  reset(){
    this.createForm();
    this.btnStatus='Send Message';
   }


}