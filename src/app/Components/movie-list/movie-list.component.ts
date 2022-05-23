import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { MoviesService } from 'src/app/Services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  searchedMovies: Movie[] = [];

  watchMovies:Movie[] = [];

  noMovieFound : boolean = false;

 constructor(private _moviesSearvice:MoviesService,
                private _LocalStorageService:LocalStorageService) {
        
  this._moviesSearvice.GetAllMovies().subscribe(data => 
  {
    this.movies = data;

    this.watchMovies = this._LocalStorageService.GetLocalStorage();

    this.searchedMovies = this.movies;

    if(this.watchMovies != null){
    for(var i = 0; i < this.movies.length; i++){
      for(var j = 0; j < this.watchMovies.length; j++){
          if(this.movies[i].id == this.watchMovies[j].id){
              this.movies[i].IsWatch = true;
            }
          }
        }
      }     
    }); 
  }
   

  ngOnInit(): void {
    
  }

  RemoveFromWatchList(id:number):void {
    this._LocalStorageService.RemoveFromLocalStorage(id);
    this.watchMovies = this._LocalStorageService.GetLocalStorage();

    var movieToRemove =  this.movies.find(x => x.id == id)
    if(movieToRemove != null){
      movieToRemove.IsWatch = false;
    }
  }

  AddToWatchList(id:number):void {
    
    this._LocalStorageService.AddToLocalStorage(this.movies.find(x => x.id == id) as Movie);
    this.watchMovies = this._LocalStorageService.GetLocalStorage();

    var movieToWatch =  this.movies.find(x => x.id == id)
    if(movieToWatch != null){
      movieToWatch.IsWatch = true;
    }
  }

  ApplySearch(search:string):void {
    this.searchedMovies = this.movies.filter(x => x.name.toLowerCase().includes(search.toLowerCase()));
    if(this.searchedMovies.length == 0){
      this.noMovieFound = true;
    }
    else{
      this.noMovieFound = false;
    }
    
  }
}
