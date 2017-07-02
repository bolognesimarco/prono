import { Injectable } from '@angular/core';

import { User } from '../model/user';
import { USERS } from '../mock-users';

@Injectable()
export class LoginService {

    private guestAvatarClass = "glyphicon glyphicon-user md-42 guestAvatarColor";
    private loggedinAvatarClass = "glyphicon glyphicon-user md-42 green";
    private avatarClass = this.guestAvatarClass;

    public getAvatarClass(): string {
        return this.avatarClass;
    }

    private logged: User = null;
    private isLogged: boolean = false;

    public logout(callback: Function): void {
        this.logged = null;
        this.setUserLoggedOut();
        this.avatarClass = this.guestAvatarClass;
        callback();
    }

    public login(userOrEmail: string, password: string, callback: Function):void {
        this.logged = USERS[0];
        this.setUserLoggedIn();
        this.avatarClass = this.loggedinAvatarClass;
        callback();
    }

    public isUserLoggedIn(): boolean {
        return this.isLogged;
    }
    public setUserLoggedIn(): void {
        this.isLogged = true;
    }
    public setUserLoggedOut(): void {
        this.isLogged = false;
    }
}
