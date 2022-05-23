import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/Services/movies.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:number = 0;
  movie:Movie = {} as Movie;

  constructor(private route:ActivatedRoute,private router:Router , private movieService:MoviesService,private sanitizer: DomSanitizer) {

    this.route.params.subscribe((params:Params) =>{
      this.id = params['id'];
    });
   }

  ngOnInit(): void {
    this.movieService.GetSingleMovie(this.id).subscribe(data => { this.movie = data;});
  }

  SanitizeURL(url:string ,iframe : HTMLIFrameElement) {
    iframe.contentWindow?.location.replace(url);
    
  }

}
