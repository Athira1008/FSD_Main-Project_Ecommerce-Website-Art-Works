import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ArtistProfileComponent } from './artist-profile/artist-profile.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { ArtistDashboardComponent } from './artist-dashboard/artist-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { UpdateProductListComponent } from './update-product-list/update-product-list.component';
import { ArtistSignupComponent } from './artist-signup/artist-signup.component';
import { ArtistLoginComponent } from './artist-login/artist-login.component';
import { AllProductsViewComponent } from './all-products-view/all-products-view.component';


import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'artist-profile',component:ArtistProfileComponent},
  {path:'customer-profile',component:CustomerProfileComponent},
  {path:'artist-dashboard',component:ArtistDashboardComponent,children:[
    {path:'product-list/add-product',component:NewProductComponent},
    {path:'product-list/products',component:ProductListComponent,children:[
    {path:'edit/:p_id',component:UpdateProductListComponent}]}]
  },
  {path:'admin/login',component:AdminLoginComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent,children:[
    {path:'product-list/products',component:ProductListComponent,children:[
      {path:'edit/:p_id',component:UpdateProductListComponent}]},
    {path:'product-list/add-product',component:NewProductComponent},]
  },
  {path:'artist/signup',component:ArtistSignupComponent},
  {path:'artist/login',component:ArtistLoginComponent},
  {path:'all-products',component:AllProductsViewComponent },


  
  // {path:'special',component:SpecialComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
