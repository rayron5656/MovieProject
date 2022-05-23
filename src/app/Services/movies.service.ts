import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private readonly SERVER:string = 'https://localhost:44312'

  constructor(private _client :HttpClient) { }

    GetAllMovies() : Observable<any>{
    return  this._client.get<Observable<any>>(`${this.SERVER}/Movies`);
  }

  GetSingleMovie(id:number) : Observable<any>{
    return this._client.get<Observable<any>>(`${this.SERVER}/Movies/${id}`);
  }

  
}


