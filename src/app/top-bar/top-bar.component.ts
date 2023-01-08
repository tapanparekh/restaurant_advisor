import { Component } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  searchQuery: string = '';

  constructor(private restaurantService: RestaurantService) {

  }

  executeSearch(searchQuery: any) {
    this.restaurantService.executeSearch(searchQuery.target.value);
  }

}
