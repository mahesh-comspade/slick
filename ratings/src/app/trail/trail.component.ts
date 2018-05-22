import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSidenavModule} from '@angular/material/sidenav';

import { SlickModule } from 'ngx-slick';

@Component({
  selector: 'app-trail',
  templateUrl: './trail.component.html',
  styleUrls: ['./trail.component.css']
})
export class TrailComponent implements OnInit {
  status: string;
  selected = 0;
  hovered = 0;
  readonly = false;
  constructor() { 
    this.status = 'loading';
  }
  showSpinner: boolean = true;
  ngOnInit() {
    this.num = 1;
    this.TIMER_INSTANCE = setTimeout(_ => {
      this.iterateNotif();
    }, this.TIMER_INTERVAL);
  }

  private LIMIT: number = 200;
  private TIMER_INTERVAL: number = 10000;
  private TIMER_INSTANCE: any;
  private num: number;
  isCollapsed = true;
  iterateNotif() {
   
    if (this.num <= 200) {
      this.status = "active";
      this.num += 1;
      this.TIMER_INSTANCE = setInterval(_ => {
        this.iterateNotif();
      }, this.TIMER_INTERVAL);
    }
    if(this.num >200){
      this.showSpinner = false;
      return;
    }
  }

  
}
