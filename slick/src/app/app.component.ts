import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

   slides = [
    {img: 'http://placehold.it/350x150/'},
    {img: 'http://placehold.it/350x150/111111'},
    {img: 'http://placehold.it/350x150/333333'},
    {img: 'http://localhost/1.png'}
  ];
  slideConfig = {'slidesToShow': 2, 'slidesToScroll': 1, 'dots': true, 'infinite': true, 'autoplay': true, 'autoplaySpeed': 1000};

  addSlide() {
    this.slides.push({img: 'https://avatars3.githubusercontent.com/u/1925733?s=88&v=4'});
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  afterChange(e) {
    console.log('afterChange');
  }
}
