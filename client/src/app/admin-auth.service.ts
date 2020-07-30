import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  private _admin_loginUrl="http://localhost:3000/admin/login";

  constructor(private http: HttpClient) { }
  loginAdmin(admin){
    return this.http.post(this._admin_loginUrl,admin); 
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
}
