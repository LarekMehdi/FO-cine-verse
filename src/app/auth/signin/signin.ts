import { Component } from '@angular/core';
import { Title } from '../../components/shared/title/title';
import { InputText } from "../../components/inputs/input-text/input-text";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SigninInterface } from '../../interfaces/auth/auth.interface';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signin',
  imports: [
    Title,
    InputText,
    ReactiveFormsModule,
    RouterLink,
],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin {

  logoPath = 'assets/logo.png';
  signinForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signinForm = this.fb.group({
      pseudo: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get pseudoControl(): FormControl {
    return this.signinForm.get('pseudo') as FormControl;
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

  onPseudoChange(value: string) {
    this.pseudoControl.setValue(value);
    this.pseudoControl.markAsDirty();
  }

  onPasswordChange(value: string) {
    this.passwordControl.setValue(value);
    this.passwordControl.markAsDirty();
  }

  signin(event: Event) {
    event.preventDefault();

    if (this.signinForm.invalid) {
      this.signinForm.markAllAsTouched();
      return;
    }

    console.log('Form values:', this.signinForm.value);

    const data: SigninInterface = {
      pseudo: this.pseudoControl.value,
      password: this.passwordControl.value,
    }

    this.authService.signin(data).subscribe({
      next: (res) => console.log('ici ', res),
      error: (err) => console.error('la' , err)
    });


  }

}
