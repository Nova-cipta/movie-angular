import { Component, inject, OnInit, signal } from '@angular/core';
import { MoviesService } from '../services/movies/movies.service';
import { Movie } from '../model/movie.type';
import { catchError } from 'rxjs';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home implements OnInit {
  moviesService = inject(MoviesService);
  movies = signal<Array<Movie>>([]);
  ngOnInit(): void {
    this.moviesService.getMovieList()
      .pipe(
        catchError((err) => {
          console.log(err)
          throw err;
        })
      )
      .subscribe((data) => {
        console.log(data.total_pages);
        this.movies.set(data.results)
      });
  }
}
