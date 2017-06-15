import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  templateUrl: './detail.html',
  styleUrls: ['./detail.css']
})
export class DetailComponent  { 
  userOrEmail: string;
  password: string;
  
  constructor(
    private loginService: LoginService, 
    private router: Router
  ){}
  
}
