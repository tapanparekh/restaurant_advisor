import { Component, OnInit } from '@angular/core';
import { IRestaurant } from '../IRestaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  restaurantList: IRestaurant[] = [];
  categoryList: string[] = [];

  constructor(
    private restaurantService: RestaurantService
  ) {
  }

  ngOnInit(): void {
    this.restaurantService.getAllResraurant().subscribe((restaurantList) => {
      this.restaurantList = restaurantList.allRestaurants;
      this.getCategoryList();
    });
  }

  getCategoryList(): void {
    this.restaurantList.forEach(restaurant => {
      const restaurantCategory = JSON.parse(restaurant.restaurantCategory || '');
      if (restaurantCategory && restaurantCategory.length) {
        restaurantCategory.forEach((category: string) => {
          if (!this.categoryList.includes(category)) {
            this.categoryList.push(category);
          }
        });
      }
    });
  }

}
