import { Component, OnInit } from '@angular/core';
import{ AuthService } from '../auth.service';
import { SignupModel } from '../signup/signup.model';
import { Router } from '@angular/router';
// import { Token } from '@angular/compiler/src/ml_parser/lexer';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserDetails=new SignupModel(null,null);
  constructor(private _auth:AuthService, private router:Router) { }
   loginUser(){
    this._auth.loginUser(this.loginUserDetails)
    .subscribe(
      // res=>console.log(res),
      (res:any)=>{
        localStorage.setItem('token',res.token)
        this.router.navigate(['/']);

      },
      err=>console.log(err)
    )
    // this.router.navigate(['/']);
   }

  ngOnInit(): void {
  }

}
