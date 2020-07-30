import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
// import { TokenInterceptorService } from './token-interceptor.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { ArtistProfileComponent } from './artist-profile/artist-profile.component';
import { ArtistDashboardComponent } from './artist-dashboard/artist-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsViewComponent } from './product-details-view/product-details-view.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { ArtWorkListComponent } from './art-work-list/art-work-list.component';
import { ArtWorkTopCategoryListComponent } from './art-work-top-category-list/art-work-top-category-list.component';
import { TopArtistListComponent } from './top-artist-list/top-artist-list.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { AdminAuthService } from './admin-auth.service';
import { ArtistAuthService } from './artist-auth.service';

import { AuthGuard } from './auth.guard';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { UpdateProductListComponent } from './update-product-list/update-product-list.component';
import { ArtistLoginComponent } from './artist-login/artist-login.component';
import { ArtistSignupComponent } from './artist-signup/artist-signup.component';
import { AllProductsViewComponent } from './all-products-view/all-products-view.component';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    CustomerProfileComponent,
    ArtistProfileComponent,
    ArtistDashboardComponent,
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailsViewComponent,
    ShoppingCartComponent,
    LogoutComponent,
    HomeComponent,
    ArtWorkListComponent,
    ArtWorkTopCategoryListComponent,
    TopArtistListComponent,
    AdminLoginComponent,
    ProductListComponent,
    NewProductComponent,
    UpdateProductListComponent,
    ArtistLoginComponent,
    ArtistSignupComponent,
    AllProductsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,AdminAuthService ,ArtistAuthService
    // AuthGuard,
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass:TokenInterceptorService,
    //   multi:true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
