import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { IRestaurantList, IRestaurantDetail, IMenuList } from './IRestaurant';


@Injectable()
export class RestaurantService {
  executeSearchSubject: Subject<string> = new Subject();
  setLoaderSubject: Subject<boolean> = new Subject();
  private baseUrl: string = 'https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/';

  constructor(private http: HttpClient) {
  }

  /**
   * This function is used to get all restaurants to display
   * @returns List of restaurants
   */
  getAllResraurant(): Observable<IRestaurantList> {
    return this.http.get<IRestaurantList>(`${this.baseUrl}allRestaurants`);
  }

  /**
   * This function is used to get restaurent details
   * @param id Restaurant id
   * @returns Restaurant detail
   */
  getResraurantDetails(id: string): Observable<IRestaurantDetail> {
    return this.http.get<IRestaurantDetail>(`${this.baseUrl}restaurantDetails/${id}`);
  }

  /**
   * This function is used to get menu item list
   * @returns Menu item list
   */
  getMenuItems(): Observable<IMenuList> {
    return this.http.get<IMenuList>(`${this.baseUrl}menu`);
  }

  /**
   * This method is used to execute searech
   * @param searchQuery Search query
   */
  executeSearch(searchQuery: string): void {
    this.executeSearchSubject.next(searchQuery);
  }

  /**
   * This method is used to start the loader
   */
  startLoader(): void {
    this.setLoaderSubject.next(true);
  }

  /**
   * This method is used to stop the loader
   */
  stopLoader(): void {
    this.setLoaderSubject.next(false);
  }

}
