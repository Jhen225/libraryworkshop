import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ValidationService } from './Validation.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import 'rxjs/add/operator/map'


@Injectable()
export class ParticipantsService {
  _url:string = 'http://107.170.76.50';
  // _url:string = 'http://localhost:3000';
  constructor(
    private http:Http,
    private validationService: ValidationService,
    private flashMessages:FlashMessagesService
    ) { }

  getParticipants(){
    let headers = new Headers();
    headers.append('Authorization',localStorage.getItem('id_token'));
    return this.http.get(this._url + '/participant/',{headers:headers})
    .map(res => res.json());
  }

  getParticipant(id){
    let headers = new Headers();
    headers.append('Authorization',localStorage.getItem('id_token'));
    return this.http.get(this._url + '/participant/' + id,{headers:headers})
    .map(res => res.json());
  }

  addParticipant(participant){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',localStorage.getItem('id_token'));
    return this.http.post(this._url + '/participant/',participant,{headers:headers})
    .map(res => res.json());
  }

  deleteParticipant(id){
    let headers = new Headers();
    headers.append('Authorization',localStorage.getItem('id_token'));
    return this.http.delete(this._url + '/participant/'+id,{headers:headers})
    .map(res => res.json());
  }

  updateParticipant(participant){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',localStorage.getItem('id_token'));
    return this.http.put(this._url + '/participant/'+participant._id,participant,{headers:headers})
    .map(res => res.json());
  }

  updateParticipants(participants){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',localStorage.getItem('id_token'));
    return this.http.put(this._url + '/participant/many',participants,{headers:headers})
    .map(res => res.json());
  }

}
