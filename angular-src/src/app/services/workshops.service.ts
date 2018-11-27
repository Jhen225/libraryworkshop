import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class WorkshopsService {
  _url:string = 'http://107.170.76.50';
  // _url:string = 'http://localhost:3000';
  constructor(private http:Http) { }

  getWorkshops(){
    let headers = new Headers();
    headers.append('Authorization',localStorage.getItem('id_token'));
    return this.http.get(this._url + '/workshop/',{headers:headers})
    .map(res=>res.json());
  }

  getWorkshop(id){
    let headers = new Headers();
    headers.append('Authorization',localStorage.getItem('id_token'));
    return this.http.get(this._url + '/workshop/' + id,{headers:headers})
    .map(res=>res.json());
  }

  addWorkshop(workshop){
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    headers.append('Authorization',localStorage.getItem('id_token'));
    return this.http.post(this._url + '/workshop/',workshop,{headers:headers})
    .map(res=>res.json());
  }

  updateWorkshop(workshop){
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    headers.append('Authorization',localStorage.getItem('id_token'));
    return this.http.put(this._url + '/workshop/' + workshop._id,workshop,{headers:headers})
    .map(res=>res.json());
  }

  updateWorkshops(workshop){
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    headers.append('Authorization',localStorage.getItem('id_token'));
    return this.http.put(this._url + '/workshop/' + workshop._id,workshop,{headers:headers})
    .map(res=>res.json());
  }

  removeParticipantFromWorkshop(id,update){
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    headers.append('Authorization',localStorage.getItem('id_token'));
    return this.http.put(this._url + '/workshop/' + id,update,{headers:headers})
    .map(res=>res.json());
  }

  deleteWorkshop(workshop_id){
    let headers = new Headers();
    headers.append('Authorization',localStorage.getItem('id_token'));
    return this.http.delete(this._url + '/workshop/' + workshop_id,{headers:headers})
    .map(res=>res.json());
  }

  getWorkshopParticipants(ids){
    let headers = new Headers();
    headers.append('Authorization',localStorage.getItem('id_token'));
    return this.http.get(this._url + '/participant/',{headers:headers})
    .map(res=>res.json());
  }


}
