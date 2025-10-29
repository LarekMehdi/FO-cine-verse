import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Toast } from './components/shared/toast/toast';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Toast
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'cine-verse';
}
