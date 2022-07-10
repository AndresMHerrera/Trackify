import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

type NavigationLink = { name: string, link: string; }

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  links: NavigationLink[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.links.push({ name: 'Dashboard', link: 'auth/dashboard' });
    this.links.push({ name: 'My Projects', link: 'auth/projects' });
    this.links.push({ name: 'My Tickets', link: 'auth/dashboard' });
    this.links.push({ name: 'User Profile', link: 'auth/dashboard' });
    this.links.push({ name: 'Manage Roles', link: 'auth/dashboard' });
    this.links.push({ name: 'Manage Projects', link: 'auth/dashboard' });
  }

  onNavigate(link: NavigationLink): void {
    this.router.navigate([link.link]);
  }
}
