import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMenu, IRestaurant } from '../IRestaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {

  restaurantId: string = '';
  restaurant: IRestaurant = {};
  menuItems: IMenu[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {
    this.restaurantId = this.activatedRoute.snapshot.params['id'] || '0';
  }

  ngOnInit(): void {
    this.restaurantService.getResraurantDetails(this.restaurantId).subscribe((restaurantDetail) => {
      this.restaurant = restaurantDetail.restaurantDetail;
      this.restaurantService.getMenuItems().subscribe((menu) => {
        this.menuItems = menu.menu.filter((m) => m.restaurantName && m.restaurantName.length && m.restaurantName.includes(this.restaurant.restaurantName || ''));
      });
    });
  }

}
