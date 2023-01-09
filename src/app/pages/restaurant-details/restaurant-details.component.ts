import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMenu, IRestaurant } from '../../services/IRestaurant';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit, OnDestroy {

  restaurantId: string = '';
  restaurant: IRestaurant = {};
  menuItems: IMenu[] = [];
  isLoading: boolean = true;
  categoryList: string[] = ['All'];
  selectedCatogary: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {
    this.restaurantId = this.activatedRoute.snapshot.params['id'] || '0';
  }

  ngOnInit(): void {
    this.restaurantService.startLoader();
    this.restaurantService.getResraurantDetails(this.restaurantId).subscribe((restaurantDetail) => {
      this.restaurant = restaurantDetail.restaurantDetail;
      this.restaurantService.getMenuItems().subscribe((menu) => {
        this.menuItems = menu.menu.filter((m) => m.restaurantName && m.restaurantName.length && m.restaurantName.includes(this.restaurant.restaurantName || ''));
        this.getCategoryList();
      });
      this.restaurantService.stopLoader();
      this.isLoading = false;
    });
  }

  getCategoryList(): void {
    this.menuItems.forEach(menu => {
      const restaurantCategory = JSON.parse(menu.itemCategory || '');
      if (restaurantCategory && restaurantCategory.length) {
        restaurantCategory.forEach((category: string) => {
          if (!this.categoryList.includes(category)) {
            this.categoryList.push(category);
          }
        });
      }
    });
  }

  selectCategory(category: string): void {
    this.selectedCatogary = category !== 'All' ? category : '';
  }

  ngOnDestroy(): void {
  }
}
