import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickModule } from 'ngx-slick';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SlickModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
