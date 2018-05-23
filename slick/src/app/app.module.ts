import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickModule } from 'ngx-slick';
// import "angular-slick-carousel";

import { AppComponent } from './app.component';
import { SlickComponent } from './slick/slick.component';


@NgModule({
  declarations: [
    AppComponent,
    SlickComponent
  ],
  imports: [
    BrowserModule,
    SlickModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
