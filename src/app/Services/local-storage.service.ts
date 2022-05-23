import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  RemoveFromLocalStorage(id: number) {

    var movies: Movie[] = this.GetLocalStorage();

    if (movies != null) {
      for (var i = 0; i < movies.length; i++) {
        if(movies[i].id == id) {
            movies.splice(i, 1);
        }
      }
    }

    localStorage.setItem(this.WATCHLIST_KEY, JSON.stringify(movies));
  }

  private readonly WATCHLIST_KEY = 'Watchmovies';

  constructor() { }

  GetLocalStorage(): Movie[] {
    var movies: Movie[] = JSON
      .parse(localStorage.getItem(this.WATCHLIST_KEY) as string);
    return movies;
  }

  AddToLocalStorage(movie: Movie): void {
    var movies: Movie[] = this.GetLocalStorage();
    if (movies == null) {
      movies = [];
    }
    
    movies.push(movie);
    
    localStorage.setItem(this.WATCHLIST_KEY, JSON.stringify(movies));
    
    
    
    
  }
}
