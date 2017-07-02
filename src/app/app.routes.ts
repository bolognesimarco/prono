
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { GuestComponent } from './guest/guest.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { DetailComponent } from './detail/detail.component';

// Route Configuration
export const appRoutes: Routes = [
    {
        path: 'user/detail',
        component: DetailComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        component: GuestComponent
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
