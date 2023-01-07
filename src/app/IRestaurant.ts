export interface IRestaurantList {
    allRestaurants: IRestaurant[];
}

export interface IRestaurant {
    restaurantName?: string;
    restaurantDescription?: string;
    restaurantImage?: string;
    restaurantCategory?: string;
    restaurantCuisine?: string;
    openingHours?: string;
    contactNumber?: string;
    websiteUrl?: string;
    isOpen?: boolean;
    id?: number;
}

export interface IRestaurantDetail {
    restaurantDetail: IRestaurant;
}

export interface IMenuList {
    menu: IMenu[];
}

export interface IMenu {
    itemName?: string;
    itemCost?: string;
    itemCategory?: string[];
    itemPhoto?: string;
    restaurantName?: string[];
    id?: string;
}