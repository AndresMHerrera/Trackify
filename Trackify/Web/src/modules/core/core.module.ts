import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
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
    LayoutComponent,
    NavigationBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule ,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule
  ]
})
export class CoreModule { }
