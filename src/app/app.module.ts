import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './Components/movie-list/movie-list.component';
import { WatchListComponent } from './Components/watch-list/watch-list.component';


import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './Components/details/details.component';

const appRoutes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'watchlist', component: WatchListComponent },
  { path: 'details/:id', component: DetailsComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    WatchListComponent,
    
    
         DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



