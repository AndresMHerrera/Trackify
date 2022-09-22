import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trackify-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onGoHome(): void {
    this.router.navigate(['auth/dashboard']);
  }

  onLogout(): void {
    this.router.navigate(['']);
  }

}
