import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './guest.html',
  styleUrls: ['./guest.css']
})
export class GuestComponent {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
  }

  public isUserLoggedIn(): boolean {
    return this.loginService.isUserLoggedIn();
  }
}