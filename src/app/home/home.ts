import { Component } from '@angular/core';
import { Title } from '../components/title/title';


@Component({
  selector: 'app-home',
  imports: [
    Title
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  protected title: string = 'testtt'
}
