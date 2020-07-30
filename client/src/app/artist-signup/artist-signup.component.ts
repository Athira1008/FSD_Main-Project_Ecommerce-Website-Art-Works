import { Component, OnInit } from '@angular/core';
import { ArtistAuthService } from '../artist-auth.service';
import { ArtistSignupModel } from '../artist-signup/artist-signup.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-signup',
  templateUrl: './artist-signup.component.html',
  styleUrls: ['./artist-signup.component.css']
})
export class ArtistSignupComponent implements OnInit {

  
  registeredUser=new ArtistSignupModel(null,null);
  constructor(private _artistauth:ArtistAuthService, private router:Router) { }
  registerUser(){
    this._artistauth.registerUser(this.registeredUser)
    .subscribe(
      (res:any)=>{
        localStorage.setItem('token', res.token);
        this.router.navigate(['/artist-dashboard']);
      },
      err=>console.log(err)
    )
    // this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
