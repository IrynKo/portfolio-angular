import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  public 'form': FormGroup;

  hasBeenSubmited: boolean = false;
  "feedbackStatus": string;

  constructor(private fb: FormBuilder) { }

  ngOnInit():
  //{this.initializeForm()}
  void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phoneNumber:  ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]],
      email:["",[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]],
      subject: ['', [Validators.required]],
      message:['', [Validators.required]],
      references: this.fb.array([this.fb.control('')])
    })
  }

  

  /*get references(): FormArray {
    return this.form.get('references') as FormArray
  }*/
  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }
  get phone() {
    return this.form.get('phoneNumber');
  }
  get subject() {
    return this.form.get('subject');
  }
  get message() {
    return this.form.get('message');
  }

  onSubmit(): void {
    console.log(this.form);
    this.hasBeenSubmited = true;
    this.form.reset();
  }
  closeFeedbackMessage() {
    this.hasBeenSubmited = false;
  }
}
