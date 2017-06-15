import { Injectable } from '@angular/core';

import { User } from '../model/user';
import { USERS } from '../mock-users';

@Injectable()
export class LoginService {

    private avatarClass = "material-icons md-46 guestAvatarColor";

    private logged: User = null;
    private isLogged: boolean = false;


    public login(userOrEmail: string, password: string, callback: Function):void {
        this.logged = USERS[0];
        this.setUserLoggedIn();
        this.avatarClass = "material-icons md-46 green";
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
