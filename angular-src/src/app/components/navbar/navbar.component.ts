import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  collapse:boolean = false;
  width = innerWidth;
  constructor(
    private authService:AuthService,
    private router:Router
  ) {

   }

  ngOnInit() {
  }

  toggle(){
    this.collapse = !this.collapse;
  }

  onResize(event){
    this.width = event.target.innerWidth;
  }

  onLogoutClick(){
    this.authService.logout();
    if(this.collapse){
      this.collapse = !this.collapse
    }
    this.router.navigate(['/login']);
    return false;
  }

}
