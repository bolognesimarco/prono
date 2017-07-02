import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class UserComponent implements OnInit { 
  userOrEmail: string;
  password: string;
  
  constructor(
    private loginService: LoginService, 
    private router: Router
  ){}

  
  ngOnInit() {
    if(!this.loginService.isUserLoggedIn()) {
      console.log("going guest");
      this.logout();
    }
  }

  public logout(){
    let _this = this;
    this.loginService.logout(function(){
      _this.router.navigate(['guest']);
    });    
  }
  
}
