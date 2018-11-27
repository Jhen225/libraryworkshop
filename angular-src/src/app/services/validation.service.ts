import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

  constructor() { }

  validateLogin(user){
    if(!user.username || !user.password){
      return false;
    } else{
      return true;
    }
  }

  validateRegister(user){

    if(!user.name || !user.email || !user.username || !user.password){
      return false;
    } else{
      return true;
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validatePhoneNumber(phoneNumber){
    const re = /^[01]?[- .]?(\([2-9]\d{2}\)|[2-9]\d{2})[- .]?\d{3}[- .]?\d{4}$/;
    return re.test(phoneNumber);
  }
}
