import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Signup } from './auth/signup/signup';
import { Signin } from './auth/signin/signin';
import { MovieList } from './components/movie/movie-list/movie-list';

export const routes: Routes = [
    // { path: 'films', component: FilmsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'signup', component: Signup },
    { path: 'signin', component: Signin },
    { path: 'movies', component: MovieList },
    
];
