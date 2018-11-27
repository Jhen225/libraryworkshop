import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

authToken:any;
user:any;
_url:string = 'http://107.170.76.50';
// _url:string = 'http://localhost:3000';
  constructor(private http:Http) { }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(this._url + '/user/register',user,{headers:headers})
    .map(res=> res.json()); 
  }

  loginUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(this._url + '/user/login',user,{headers:headers})
    .map(res=> res.json()); 
  }

  persistData(){
    var token = localStorage.getItem('id_token')
    var user = localStorage.getItem('user')
    return {token:token,user:user};
  }

  storeUserData(token, user){
    
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.getItem('id_token')
    localStorage.getItem('user')
    this.authToken = token;
    this.user = user;
  }

  isLoggedIn(){
    return tokenNotExpired('id_token');
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  
}
