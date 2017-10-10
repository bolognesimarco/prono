import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../model/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {

  private userOrEmail: string;
  private password: string;
  private returnUrl: string
  private tempUser: User = null;
  private message: String = null;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // this.loginService.logout(() => {
    //   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //   //questo è per estrarre dal routing l'indirizzo del chiamante, per poter eventualmente
    //   // decidere che fare dopo il logout.
    //   console.log(this.returnUrl);
    // });
  }



  public login() {
    this.loginService.checkLogin(this.userOrEmail, this.password).subscribe(
      users => {
        if (users != null && users.length > 0) {
          this.tempUser = users[0];
        }
      },
      error => {
        console.log(error);
      },
      () => {
        if (this.tempUser != null) {
          this.loginService.login(this.tempUser);
          this.router.navigate(['home']);
        } else {
          this.loginService.logout();
          this.message = "Wrong Credentials !!";
        }
      }
    );
  }

}
