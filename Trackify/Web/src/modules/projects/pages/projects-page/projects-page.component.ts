import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

export type Project = { id: number, name: string }

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  projects: Project[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.projects.push({ id: 0, name: 'Trackify' });
    this.projects.push({ id: 1, name: 'Shopify' });
  }

  onViewDetails(project: Project): void {
    this.router.navigate(['auth/projects', project.id]);
  }

}
