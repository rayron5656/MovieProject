import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { LocalStorageService } from 'src/app/Services/local-storage.service';


@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private _localStorageService:LocalStorageService) { 

    this.movies = this._localStorageService.GetLocalStorage();

   }

  ngOnInit(): void {
    
    
  }

  RemoveFromList(id:number){
    var movieToRemove = this.movies.find(x => x.id == id);
    if(movieToRemove != null){
      movieToRemove.IsWatch = false;
      
    }
    this._localStorageService.RemoveFromLocalStorage(id);
    this.movies = this._localStorageService.GetLocalStorage();
  }

}
