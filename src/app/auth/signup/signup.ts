import { Component } from '@angular/core';
import { Title } from "../../components/shared/title/title";
import { InputText } from '../../components/inputs/input-text/input-text';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthApi } from '../../api/auth.api';
import { signupInterface } from '../../interfaces/auth/auth.interface';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signup',
  imports: [
    Title,
    InputText,
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

  logoPath = 'assets/logo.png';
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(6)]],
    }, {
      validators: this.passwordsMismatchValidator
    });
  }

  get emailControl(): FormControl {
    return this.signupForm.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.signupForm.get('password') as FormControl;
  }

  get repeatPasswordControl(): FormControl {
    return this.signupForm.get('repeatPassword') as FormControl;
  }

  passwordsMismatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const repeatControl = formGroup.get('repeatPassword');

    if (!passwordControl || !repeatControl) return null;

    const password = passwordControl.value;
    const repeatPassword = repeatControl.value;

    if (password !== repeatPassword) {
      repeatControl.setErrors({ ...repeatControl.errors, passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      if (repeatControl.hasError('passwordMismatch')) {
        const errors = { ...repeatControl.errors };
        delete errors['passwordMismatch'];
        repeatControl.setErrors(Object.keys(errors).length ? errors : null);
      }
      return null;
    }
  }

  getErrorMessage(control: FormControl) {
    if (control.hasError('required')) return 'Champ requis';
    if (control.hasError('email')) return 'Email invalide';
    if (control.hasError('minlength')) return `Minimum ${control.errors!['minlength'].requiredLength} caractères`;
    if (control.hasError('passwordMismatch')) return 'Les mots de passe doivent être identiques';
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

  onRepeatPasswordChange(value: string) {
    this.repeatPasswordControl.setValue(value);
    this.repeatPasswordControl.markAsDirty();
  }

  signup(event: Event) {
    event.preventDefault();

    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    console.log('Form values:', this.signupForm.value);

    const data: signupInterface = {
      email: '',
      pseudo: '',
      password: ''
    }

    this.authService.signup(data).subscribe({
      next: (res) => console.log('ici ', res),
      error: (err) => console.error('la' , err)
    });


  }
}
