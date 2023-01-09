import { Component, Input } from '@angular/core';
import { IRestaurant } from '../../../services/IRestaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent {

  @Input() details: IRestaurant = {};


}
