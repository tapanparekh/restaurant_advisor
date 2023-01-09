import { Component, EventEmitter, Output } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  searchQuery: string = '';
  isSidebarOpen: boolean = true;
  @Output() toggleSidebarEvent: EventEmitter<boolean> = new EventEmitter();

  constructor(private restaurantService: RestaurantService) {
  }

  executeSearch(searchQuery: any) {
    this.restaurantService.executeSearch(searchQuery.target.value);
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen
    this.toggleSidebarEvent.emit(this.isSidebarOpen);
  }
}
