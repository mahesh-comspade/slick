import { Component, Inject, group } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  count = 0;
  public TREND_OPTIONS: any = ['Movie', 'Actor', 'Actress', 'Cinematography', 'Writer', 'Director'];
   slides = [
    {img: 'http://placehold.it/350x150/'},
    {img: 'http://placehold.it/350x150/111111'},
    {img: 'http://placehold.it/350x150/333333'},
    {img: 'http://localhost/1.png'}
  ];
  slideConfig = {'slidesToShow': 2, 'slidesToScroll': 1, 'dots': true, 'infinite': true, 'autoplay': true, 'autoplaySpeed': 1000};

  sample: Applications[];
  // public apps: Applications[];

  addSlide() {
    this.slides.push({img: 'https://avatars3.githubusercontent.com/u/1925733?s=88&v=4'});
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  afterChange(e) {
    console.log('afterChange');
  }

  display(i){
    this.count = i;
  }
  constructor(private http: HttpClient) {
    this.http.get('http://192.168.0.104:8080/api/v1/feed/trending?category=1').subscribe(data => {
      this.sample = data as Applications[];
      console.log(this.sample); // using the HttpClient instance, http to call the API then subscribe to the data and display to console
    });
  }

  //   ngOnInit() {
  //   this.http.get('http://192.168.0.104:8080/api/v1/feed/trending?category=1').subscribe(data => {
  //     this.sample = data as Applications[];
  //     console.log(this.sample); // using the HttpClient instance, http to call the API then subscribe to the data and display to console
  //   });
  // }


}
  interface Applications {
    id: number,
    profile: {
      id: number,
      username: string,
      firstname: string,
      lastname: string,
      email: string,
      mobile: number,
      createdDatetime: number,
      modifiedDatetime: number
    },
    group: string,
    type: string,
    header: string,
    body: string,
    createdDatetime: number,
    modifiedDatetime: number,
    modifiedBy: string,
    rating: number
  }


