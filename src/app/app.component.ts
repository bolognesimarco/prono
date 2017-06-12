import { Component } from '@angular/core';
import { LoginService } from './login/login.service';


@Component({
  selector: 'pronoapp',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})


export class AppComponent  { 

  constructor(private loginService: LoginService){}


}
