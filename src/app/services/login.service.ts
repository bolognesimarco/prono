import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { User } from '../model/user';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

    private logged: User = null;

    constructor(private http: Http) { }

    public checkLogin(username: string, password: string):Observable<User[]> {
        return this.http.get('api/users/?username='+username+'$')
                .map(response => response.json().data as User[]);
    }

    public login(user: User): void {
        this.logged = user;
    }

    public logout(): void {
        this.logged = null;
    }
    
    public isUserLoggedIn(): boolean {
        return this.logged != null;
    }




















    private guestAvatarClass = "glyphicon glyphicon-user md-42 guestAvatarColor";
    private loggedinAvatarClass = "glyphicon glyphicon-user md-42 green";
    private avatarClass = this.guestAvatarClass;

    
    private wrongCredentials = "Sorry, wrong credentials..";


    public getAvatarClass(): string {
        return this.avatarClass;
    }

    
    private isLogged: boolean = false;

    public logoute(callback: Function): void {
        this.setUserLoggedOut();
        callback();
    }
    public setUserLoggedIn(user: User): void {
        this.isLogged = true;
        this.logged = user;
        this.avatarClass = this.loggedinAvatarClass;
    }
    public setUserLoggedOut(): void {
        this.isLogged = false;
        this.logged = null;
        this.avatarClass = this.guestAvatarClass;
    }	
}
