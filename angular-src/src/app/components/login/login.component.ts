import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../../services/Validation.service';
import { AuthService } from '../../services/auth.service';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:String;
  password:String;
  loggedIn:boolean = false;
  
  constructor(
    private validationService: ValidationService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router:Router,
    private http:Http
  ) { }

  ngOnInit() {
    if(this.authService.isLoggedIn()){
      this.router.navigate(['/participants'])
    }
  }

  onLoginSubmit(){
    const user = {
      username:this.username,
      password:this.password
    }

    if(!this.validationService.validateLogin(user)){
      this.flashMessage.show('Please fill in all fields!',{cssClass:'alert-warning'});
      return false;
    }
    this.authService.loginUser(user).subscribe(data => {
      
      if(data.success){
        // this.flashMessage.show('Welcome, ' + data.user.username, {cssClass:'alert-success', timeout:5000});
        this.authService.storeUserData(data.token,data.user);
        this.router.navigate(['/participants'])
      } else{
        this.flashMessage.show('Please provide valid credentials', {cssClass:'alert-warning', timeout:5000});
        this.router.navigate(['/login']);
      }
    })

  }
}
