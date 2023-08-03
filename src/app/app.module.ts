import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { FoodSearchComponent } from './components/food-search/food-search.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { FooterComponent } from './components/footer/footer.component';
import { RestaurentDetailComponent } from './components/restaurent-detail/restaurent-detail.component';
import { MenuComponent } from './components/menu/menu.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { NewHeadComponent } from './components/new-head/new-head.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FoodSearchComponent,
    HomeComponent,
    RestaurantsComponent,
    FooterComponent,
    RestaurentDetailComponent,
    MenuComponent,
    ItemDetailComponent,
    CheckoutComponent,
    NewHeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
