import { Component, OnInit } from '@angular/core';
import{ AuthService } from '../auth.service';
import { SignupModel } from '../signup/signup.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  registeredUser=new SignupModel(null,null);
  constructor(private _auth:AuthService, private router:Router) { }
  registerUser(){
    this._auth.registerUser(this.registeredUser)
    .subscribe(
      (res:any)=>{
        localStorage.setItem('token', res.token);
        this.router.navigate(['/']);
      },
      err=>console.log(err)
    )
    // this.router.navigate(['/']);
  }
  ngOnInit(): void {
  }

}
