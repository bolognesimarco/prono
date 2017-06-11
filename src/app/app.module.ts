import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { appRoutes } from './app.routes';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }