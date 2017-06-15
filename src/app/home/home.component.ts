import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent  { 
  constructor(
    private loginService: LoginService, 
  ){}
}