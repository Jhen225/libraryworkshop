import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  _url:string = 'http://107.170.76.50';
  // _url:string = 'http://localhost:3000';

  constructor(private http:Http) { }

  updateUser(update){
    let user = JSON.parse(localStorage.getItem('user'));
    let headers = new Headers();
    headers.append('content-type','application/json');
    headers.append('Authorization',localStorage.getItem('id_token'));
    return this.http.put(this._url+'/user/'+user.id,update,{headers:headers})
    .map(res => res.json());
  }

}
