import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistAuthService {

 private _artist_registerUrl="http://localhost:3000/artist/register";
 private _artist_loginUrl="http://localhost:3000/artist/login";

  constructor(private http: HttpClient) { }
  registerUser(artist){
    return this.http.post(this._artist_registerUrl,artist);
  }
  loginUser(artist){
    return this.http.post(this._artist_loginUrl,artist);
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
}
