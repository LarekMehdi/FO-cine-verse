import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
    // { path: 'films', component: FilmsComponent },
    { path: 'home', component: Home },
    { path: '', redirectTo: 'films', pathMatch: 'full' }
];
