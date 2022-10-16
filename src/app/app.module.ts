import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';
import { HeroSectionComponent } from './hero-section/hero-section/hero-section.component';
import { ProductsComponent } from './products/products/products.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderSectionComponent } from './fillterpage/header-section/header-section.component';
import { HomeComponent } from './home/home.component';
import { FillterpageComponent } from './fillterpage/fillterpage/fillterpage.component';
import { SideMenuFillterComponent } from './fillterpage/side-menu-fillter/side-menu-fillter.component';
import { DiscountFillterComponent } from './fillterpage/discount-fillter/discount-fillter.component';
import { RatingFillterComponent } from './fillterpage/rating-fillter/rating-fillter.component';
import { CategoriesFillterComponent } from './fillterpage/categories-fillter/categories-fillter.component';
import { PriceFillterComponent } from './fillterpage/price-fillter/price-fillter.component';
import { ProductsListComponent } from './fillterpage/products-list/products-list.component';
import { TopNavFillterComponent } from './fillterpage/top-nav-fillter/top-nav-fillter.component';
import { LoginComponent } from './login/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    HeroSectionComponent,
    ProductsComponent,
    FooterComponent,
    HeaderSectionComponent,
    HomeComponent,
    FillterpageComponent,
    SideMenuFillterComponent,
    DiscountFillterComponent,
    RatingFillterComponent,
    CategoriesFillterComponent,
    PriceFillterComponent,
    ProductsListComponent,
    TopNavFillterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
