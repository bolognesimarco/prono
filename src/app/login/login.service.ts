import { Injectable } from '@angular/core';

import { User } from '../model/user';
import { USERS } from '../mock-users';

@Injectable()
export class LoginService {

    avatarClass = "guestAvatar";


    login(userOrEmail: string, password: string): Promise<User> {
        this.avatarClass = "pronoerAvatar";
        console.log("changed Class!!");
        return Promise.resolve(USERS[0]);
    }
}
