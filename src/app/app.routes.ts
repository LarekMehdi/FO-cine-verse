import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Signup } from './auth/signup/signup';

export const routes: Routes = [
    // { path: 'films', component: FilmsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'signup', component: Signup },
    
];
