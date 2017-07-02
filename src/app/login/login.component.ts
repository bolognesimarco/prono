import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../model/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit { 
  userOrEmail: string;
  password: string;
  returnUrl: string
  
  constructor(
    private loginService: LoginService, 
    private router: Router,
    private route: ActivatedRoute,
  ){}

  ngOnInit() {
      // reset login status
    let _this = this;
    this.loginService.logout(function(){
      // get return url from route parameters or default to '/'
      _this.returnUrl = _this.route.snapshot.queryParams['returnUrl'] || '/';
      console.log(_this.returnUrl);
    });

  }

  public login() {
    let _this = this;
    this.loginService.login(this.userOrEmail, this.password, function() {
      _this.router.navigate(['home']);
    });
  }
}
