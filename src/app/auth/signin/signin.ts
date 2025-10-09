import { Component } from '@angular/core';
import { Title } from '../../components/shared/title/title';
import { InputText } from "../../components/inputs/input-text/input-text";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  imports: [
    Title,
    InputText
],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin {

  signinForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get emailControl(): FormControl {
  return this.signinForm.get('email') as FormControl;
}

  get passwordControl(): FormControl {
    return this.signinForm.get('password') as FormControl;
  }

  signin(event: Event) {
    event.preventDefault();

    if (this.signinForm.invalid) {
      this.signinForm.markAllAsTouched();
      return;
    }

    console.log('Form values:', this.signinForm.value);


  }

}
