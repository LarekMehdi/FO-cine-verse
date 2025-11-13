import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../service/movie.service';

@Component({
  selector: 'app-movie-list',
  imports: [],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css'
})
export class MovieList implements OnInit{

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.findAll().subscribe({
      next: (res) => {},
      error: (err) => {}
    });
  }

 

}
