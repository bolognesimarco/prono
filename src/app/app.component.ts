import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'pronoapp',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})


export class AppComponent  {

  private watchingUser: boolean = false; 

  constructor(
    private loginService: LoginService, 
    private router: Router
  ){
    this.loginService.setUserLoggedOut();
  }

  public userClick(): void {
    if(this.loginService.isUserLoggedIn()) {
      if(this.watchingUser) {
        this.watchingUser = false;
        this.router.navigate(['home']);
      } else {
        this.watchingUser = true;
        this.router.navigate(['user']);
      }
    } else {
      this.router.navigate(['login']);
    }
  }

}
