import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickModule } from 'ngx-slick';
import { HttpClientModule } from '@angular/common/http';
import {InterceptorModule} from './interceptor/interceptor.module';
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
    HttpClientModule,
    SlickModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
