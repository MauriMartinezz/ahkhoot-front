// eslint-disable-next-line prettier/prettier
import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Pagination, Navigation, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Pagination, Navigation]);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {
  exampleText: string =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam iste repellat omnis sit laudantium, saepe labore, voluptate hic odit laboriosam libero excepturi nesciunt assumenda velit fugiat non voluptas alias error veniam culpa quia, iusto ab maxime esse. Ut necessitatibus dolorem porro, vel cum pariatur incidunt neque ipsum, consequuntur ab voluptates.';
  caractersLimit: number = 100;
  constructor() {}
  onSlideChange() {
    console.log('slide change');
  }
}
