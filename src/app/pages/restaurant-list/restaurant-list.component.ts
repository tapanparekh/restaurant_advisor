import { Component, OnDestroy, OnInit } from '@angular/core';
import { IRestaurant } from '../../services/IRestaurant';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit, OnDestroy {

  restaurantList: IRestaurant[] = [];
  categoryList: string[] = [];
  searchQuery: string = '';
  isLoading: boolean = true;

  constructor(
    private restaurantService: RestaurantService
  ) {
  }

  ngOnInit(): void {
    this.restaurantService.startLoader();
    this.restaurantService.getAllResraurant().subscribe((restaurantList) => {
      this.restaurantList = restaurantList.allRestaurants;
      this.getCategoryList();
      this.restaurantService.stopLoader();
      this.isLoading = false;
    });
    this.restaurantService.executeSearchSubject.subscribe((searchString) => {
      this.searchQuery = searchString;
    })
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

  ngOnDestroy(): void {
    this.restaurantService.executeSearchSubject.unsubscribe();
  }
}
