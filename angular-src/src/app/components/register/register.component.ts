import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../../services/Validation.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:string;
  username:string;
  email:string;
  password:string;

  constructor(
    private validationService: ValidationService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['/login'])
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    if(!this.validationService.validateRegister(user)){
      this.flashMessage.show('Please fill in all fields!',{cssClass:'alert-warning'});
      return false;
    }

    if(!this.validationService.validateEmail(user.email)){
      this.flashMessage.show('Please provide a valid email!',{cssClass:'alert-warning'});
      return false;
    }

    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessage.show('User has been registered',{cssClass:'alert-success'});
        this.router.navigate(['/login']);
      }else{
        this.flashMessage.show('User was not registered',{cssClass:'alert-warning'});
        this.router.navigate(['/login']);
      }
    })

  }

}
