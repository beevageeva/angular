import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
//    AppRoutingModule
    RouterModule.forRoot([
      {path: 'news', component: NewsComponent}, 
      {path: 'home', component: HomeComponent}, 
     ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
