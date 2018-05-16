import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentRate = 1;
  currentRate1 = 1.2;
  // value = 'true';
  selected = 0;
  hovered = 0;
  readonly = false;
  trnz: any = [];  
  showSpinner: boolean = true;
  ctrl = new FormControl(null, Validators.required);

  constructor(private http: HttpClient){}

  ngOnInit(){
    
    this.http.get('http://localhost:3000/movies').subscribe(data => {
      this.showSpinner = false;
      this.trnz = data;
      console.log(data); // using the HttpClient instance, http to call the API then subscribe to the data and display to console
    });
  }
  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }

  show(){
    this.readonly = true;
  }
}
