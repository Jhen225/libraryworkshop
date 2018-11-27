import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/User.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  changePass:boolean = false;
  clear:boolean = false;
  update = {
    password:'',
    confirm:''
  };
  
  authForm: FormGroup;

  auth = {
    username:String,
    password:String
  }

  constructor(
      private flashMessage:FlashMessagesService,
      private userService:UserService,
      private router: Router,
      private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.authForm = this.fb.group({
      username: [ '', Validators.required ],
      password: [ '', Validators.required ]
    }) 
  }

  changePassword(){
    if(this.update.password === ""){
      return this.flashMessage.show('Password required',{cssClass:'alert-warning',timeout:3000});
    }
    
    if(this.update.password === this.update.confirm){
      this.userService.updateUser(this.update)
      .subscribe(data => {
        if(data.success){
          this.changePass = !this.changePass;
          this.flashMessage.show('Password changed',{cssClass:'alert-success',timeout:3000});
          this.router.navigate(['/settings']);
        }
      })
    } else{
      this.flashMessage.show('Passwords Must Match',{cssClass:'alert-warning',timeout:3000});
    }
  }

  drop(){
    // this.userService.authenticate()
    // .subscribe(data => {
    //   if(data.success){
    //     if(confirm('Are you sure>')){
    //       this.userService.clearDb()
    //       .subscribe(data => {
    //         if(data.success){
    //           this.clear = false;
    //           this.router.navigate(['/settings']);
    //         } else {
    //           this.flashMessage.show('Unauthorized',{cssClass:'alert-warning',timeout:3000});
    //           return this.router.navigate(['/participants']);
    //         }
    //       })
    //     } else{
    //       return;
    //     }
    //   }
    // })
    
  }

}
