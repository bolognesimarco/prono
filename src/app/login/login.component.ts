import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent  { 
  userOrEmail: string;
  password: string;
  user: User;
  
  constructor(
    private loginService: LoginService, 
    private router: Router
  ){}

  login() {
    console.log("logging in....");
    let _this = this;
    this.loginService.login(this.userOrEmail, this.password).then(
      function(user){
        _this.user = user; 
        _this.router.navigate(['home']);
      });
  }
}
