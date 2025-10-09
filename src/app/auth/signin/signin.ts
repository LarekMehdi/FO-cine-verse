import { Component } from '@angular/core';
import { Title } from '../../components/shared/title/title';
import { InputText } from "../../components/inputs/input-text/input-text";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  imports: [
    Title,
    InputText,
    ReactiveFormsModule
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

  getErrorMessage(control: FormControl) {
    if (control.hasError('required')) return 'Champ requis';
    if (control.hasError('email')) return 'Email invalide';
    if (control.hasError('minlength')) return `Minimum ${control.errors!['minlength'].requiredLength} caractères`;
    return null;
  }

  onEmailChange(value: string) {
    this.emailControl.setValue(value);
    this.emailControl.markAsDirty();
  }

  onPasswordChange(value: string) {
    this.passwordControl.setValue(value);
    this.passwordControl.markAsDirty();
  }

  signin(event: Event) {
    event.preventDefault();

    if (this.signinForm.invalid) {
      this.signinForm.markAllAsTouched();
      console.log('Form values:', this.signinForm.value);
      return;
    }

    console.log('Form values:', this.signinForm.value);


  }

}
