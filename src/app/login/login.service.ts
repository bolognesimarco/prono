import { Injectable } from '@angular/core';

import { User } from '../model/user';
import { USERS } from '../mock-users';

@Injectable()
export class LoginService {
    login(userOrEmail: string, password: string): Promise<User> {
        return Promise.resolve(USERS[0]);
    }
}
