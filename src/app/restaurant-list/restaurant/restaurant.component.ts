import { Component, Input } from '@angular/core';
import { IRestaurant } from 'src/app/IRestaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent {

  @Input() details: IRestaurant = {};


}
