import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MoviePaging } from '../../model/movie-paging.type';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  http = inject(HttpClient)
  getMovieList() {
    const url = 'https://api.themoviedb.org/3/discover/movie';
    const headers = new HttpHeaders(
      'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTUzNjg0ZmRiMzRhMTE0MzJkMmRiNjk5MTNhMTk0MSIsIm5iZiI6MTYyMDM2NjM4OC4wMzgsInN1YiI6IjYwOTRkNDM0ZTAzOWYxMDAzYzFmNzc0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AjUHIe8F7P19o3O_IIyFHAFO5pyLoCac7TzZ1L8oFr4'
    );
    return this.http.get<MoviePaging>(
      url,
      { headers }
    ).pipe(
      catchError((err) => {
        console.log(err)
        throw err;
      })
    );
  }
}
