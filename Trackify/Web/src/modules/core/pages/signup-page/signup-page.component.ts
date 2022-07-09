import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onFinishSignUp() {
    this.router.navigate(['login']);
  }
}
