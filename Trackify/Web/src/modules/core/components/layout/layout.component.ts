import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  showFiller: boolean = true;

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
