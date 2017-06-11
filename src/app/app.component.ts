import { Component } from '@angular/core';
import { LoginService } from './login/login.service';


@Component({
  selector: 'pronoapp',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  providers: [ LoginService ]
})
export class AppComponent  { 
  name = 'Starting with Angular prono app'; 
}
