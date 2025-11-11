import { Component, inject } from '@angular/core';
import { Title } from '../../components/shared/title/title';
import { InputText } from "../../components/inputs/input-text/input-text";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthInterface, SigninInterface } from '../../interfaces/auth/auth.interface';
import { AuthService } from '../../service/auth.service';
import { AuthStore } from '../../store/auth.store';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from '../../service/toast.service';
import { InputPassword } from "../../components/inputs/input-password/input-password";

@Component({
  selector: 'app-signin',
  imports: [
    Title,
    InputText,
    ReactiveFormsModule,
    RouterLink,
    InputPassword,
    InputPassword,
],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin {

  logoPath: string = 'assets/logo.png';
  signinForm: FormGroup;
  authStore = inject(AuthStore);

  constructor(
    private fb: FormBuilder,
    private authService: AuthService, 
    private router: Router,
    private toastService: ToastService,
  ) {
    this.signinForm = this.fb.group({
      pseudo: ['', [Validators.required, Validators.minLength(2)]],
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

    const data: SigninInterface = {
      pseudo: this.pseudoControl.value,
      password: this.passwordControl.value,
    }

    this.authService.signin(data).subscribe({
      next: (res: AuthInterface) => {
        this.authStore.login(res);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          this.toastService.error('Identifiant incorrect');
        } else {
          this.toastService.defaultError();
        }
      }
    });
  }
}
