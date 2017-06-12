import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { appRoutes } from './app.routes';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GuestComponent } from './guest/guest.component';
import { HomeComponent } from './home/home.component';
import { LoginService } from './login/login.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, LoginComponent, GuestComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ LoginService ]

})
export class AppModule { }