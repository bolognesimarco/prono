import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { User } from '../model/user';

@Component({
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent  { 
  userOrEmail: string;
  password: string;
  user: User;
  
  constructor(private loginService: LoginService){}

  login() {
    this.loginService.login(this.userOrEmail, this.password).then(user => this.user = user);
  }
}
