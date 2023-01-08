import { Pipe, PipeTransform } from '@angular/core';
import { IRestaurant, IMenu } from './IRestaurant';

@Pipe({
  name: 'filterRestaurant',
  pure: true
})
export class FilterRestaurantPipe implements PipeTransform {

  transform(items: any[], filterQuery: string, filter: string): any[] {
    if (filterQuery) {
      if (filter === 'restaurant') {
        return items.filter(item => item.restaurantName ? item.restaurantName.toLocaleLowerCase().indexOf(filterQuery.toLocaleLowerCase()) !== -1 : false);
      }
      else {
        return items.filter(item => item.itemCategory && item.itemCategory.length && filterQuery.length ? item.itemCategory.indexOf(filterQuery) !== -1 : false);
      }
    }
    return items;
  }

}
