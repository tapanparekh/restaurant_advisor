import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RestaurantDetailsComponent } from './pages/restaurant-details/restaurant-details.component';
import { RestaurantListComponent } from './pages/restaurant-list/restaurant-list.component';

import { HttpInterceptorService } from './services/http-interceptor.service';
import { RestaurantService } from './services/restaurant.service';
import { RestaurantComponent } from './pages/restaurant-list/restaurant/restaurant.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FilterRestaurantPipe } from './pipes/filter-restaurant.pipe';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RestaurantDetailsComponent,
    RestaurantComponent,
    SideBarComponent,
    TopBarComponent,
    FilterRestaurantPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    RestaurantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
