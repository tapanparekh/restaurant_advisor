import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { RestaurantService } from './restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private restaurantService: RestaurantService
  ) { }

  ngOnInit(): void {
    this.restaurantService.setLoaderSubject.subscribe((loder) => {
      if (loder) {
        this.spinner.show();
      }
      else {
        this.spinner.hide();
      }
    })
  }
  title = 'restaurant_advisor';
}
