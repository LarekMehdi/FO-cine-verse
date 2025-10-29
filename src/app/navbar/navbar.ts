import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthStore } from '../store/auth.store';
import { ToastService } from '../service/toast.service';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink
  ],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  constructor(private router: Router, private toastService: ToastService) {}

  authStore = inject(AuthStore);

  readonly isLoggedIn = computed(() => this.authStore.isAuthenticated());

  goToSignin() {
    this.router.navigate(['/signin'])
  }

  loggout() {
    this.authStore.logout();
    this.toastService.success('test');
  }

}
