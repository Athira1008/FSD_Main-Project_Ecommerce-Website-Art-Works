import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import { Observable } from 'rxjs';
import{ AuthService } from './auth.service'
import { AdminAuthService } from './admin-auth.service';
import { ArtistAuthService } from './artist-auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _auth:AuthService,private _adminauth:AdminAuthService, private _artistauth:ArtistAuthService,private router:Router){

  }
  canActivate():boolean{
    if(this._auth.loggedIn()||this._adminauth.loggedIn()||this._artistauth.loggedIn())
    {
      console.log('true')
      return true
    }
    else{
      this.router.navigate(['/login'])
      return false
    }
    // next: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
  }
  
}
