import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './Components/movie-list/movie-list.component';
import { WatchListComponent } from './Components/watch-list/watch-list.component';

const appRoutes: Routes = [
  { path: 'movielist', component: MovieListComponent },
  { path: 'watchlist', component: WatchListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    WatchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgbModal
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



