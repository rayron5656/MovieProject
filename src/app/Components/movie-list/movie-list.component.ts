import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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

  WatchMovies:Movie[] = [];

 constructor(private _moviesSearvice:MoviesService,
                private _LocalStorageService:LocalStorageService) {
        
  this._moviesSearvice.GetAllMovies().subscribe(data => 
  {
    this.movies = data;

    this.WatchMovies = this._LocalStorageService.GetLocalStorage();

    if(this.WatchMovies != null){
    for(var i = 0; i < this.movies.length; i++){
      for(var j = 0; j < this.WatchMovies.length; j++){
          if(this.movies[i].id == this.WatchMovies[j].id){
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
    this.WatchMovies = this._LocalStorageService.GetLocalStorage();

    var movieToRemove =  this.movies.find(x => x.id == id)
    if(movieToRemove != null){
      movieToRemove.IsWatch = false;
    }
  }

  AddToWatchList(id:number):void {
    
    this._LocalStorageService.AddToLocalStorage(this.movies.find(x => x.id == id) as Movie);
    this.WatchMovies = this._LocalStorageService.GetLocalStorage();

    var movieToWatch =  this.movies.find(x => x.id == id)
    if(movieToWatch != null){
      movieToWatch.IsWatch = true;
    }
  }
}
