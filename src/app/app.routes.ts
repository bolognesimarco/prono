
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

// Route Configuration
export const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }
];
