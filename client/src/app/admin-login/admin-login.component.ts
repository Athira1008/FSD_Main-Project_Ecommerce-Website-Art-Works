import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../admin-auth.service';
import { AdminLoginModel } from '../admin-login/admin-login.model';
import { Router } from '@angular/router'
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
   loginAdminDetails=new AdminLoginModel(null,null);
  constructor(private _adminauth:AdminAuthService, private router:Router) { }
  loginAdmin(){
    this._adminauth.loginAdmin(this.loginAdminDetails)
    .subscribe(
      // res=>console.log(res),
      (res:any)=>{
        localStorage.setItem('token',res.token)
        this.router.navigate(['/admin-dashboard']);

      },
      err=>console.log(err)
    )
    // this.router.navigate(['/']);
   }
  ngOnInit(): void {
  }

}
