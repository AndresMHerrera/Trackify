import { AuthenticationService } from './../../services/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.router.navigate(['auth/dashboard']);
  }

  onSignup() {
    this.router.navigate(['signup']);
  }
}
