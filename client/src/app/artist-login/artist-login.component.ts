import { Component, OnInit } from '@angular/core';
import { ArtistAuthService } from '../artist-auth.service';
import { ArtistSignupModel } from '../artist-signup/artist-signup.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-login',
  templateUrl: './artist-login.component.html',
  styleUrls: ['./artist-login.component.css']
})
export class ArtistLoginComponent implements OnInit {
  loginArtistDetails=new ArtistSignupModel(null,null);

  constructor(private _artistauth:ArtistAuthService, private router:Router) { }

  loginUser(){
    this._artistauth.loginUser(this.loginArtistDetails)
    .subscribe(
      // res=>console.log(res),
      (res:any)=>{
        localStorage.setItem('token',res.token)
        this.router.navigate(['/artist-dashboard']);

      },
      err=>console.log(err)
    )
    // this.router.navigate(['/']);
   }
  ngOnInit(): void {
  }

}
