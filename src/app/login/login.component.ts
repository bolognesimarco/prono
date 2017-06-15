import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent  { 
  userOrEmail: string;
  password: string;
  
  constructor(
    private loginService: LoginService, 
    private router: Router
  ){}

  public login() {
    let _this = this;
    this.loginService.login(this.userOrEmail, this.password, function() {
      _this.router.navigate(['home']);
    });
  }
}
