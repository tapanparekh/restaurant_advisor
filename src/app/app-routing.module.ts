import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantDetailsComponent } from './pages/restaurant-details/restaurant-details.component';
import { RestaurantListComponent } from './pages/restaurant-list/restaurant-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'restaurant-list'
  },
  {
    path: 'restaurant-list',
    component: RestaurantListComponent
  },
  {
    path: 'restaurant-details/:id',
    component: RestaurantDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
