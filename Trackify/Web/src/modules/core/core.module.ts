import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LayoutComponent } from './components/layout/layout.component';

/*
*  A core module is a NgModule that instantiates the app and loads core functions that will be used globally across the application.
*  Thus any singleton service should be implemented in a core module. A header, footer, or navigation bar are examples of this type of module.
*  All services that have to have one and only one instance per application (singleton services) should be implemented here.
*  Examples include an authentication service or user service.
*/

@NgModule({
  declarations: [
    LoginPageComponent,
    SignupPageComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
