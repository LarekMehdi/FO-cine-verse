import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthStore } from '../store/auth.store';

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

  constructor(private router: Router) {}

  authStore = inject(AuthStore);

  readonly isLoggedIn = computed(() => this.authStore.isAuthenticated());

  goToSignin() {
    this.router.navigate(['/signin'])
  }

  loggout() {
    this.authStore.logout();
  }

}
