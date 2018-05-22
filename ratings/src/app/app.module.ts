import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgressbarModule } from 'ngx-bootstrap';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
// import {FormControl, Validators} from '@angular/forms';


import { AppComponent } from './app.component';
import { TrailComponent } from './trail/trail.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    TrailComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,MatSidenavModule,
    NgbModule.forRoot(),
    TooltipModule.forRoot(),
    ProgressbarModule.forRoot(),
    CollapseModule.forRoot(), BsDropdownModule.forRoot()
    // FormControl, Validators
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
