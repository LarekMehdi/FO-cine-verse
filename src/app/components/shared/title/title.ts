import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  standalone: true,
  templateUrl: './title.html',
  styleUrl: './title.css'
})
export class Title {
  @Input() content!: string;
}
