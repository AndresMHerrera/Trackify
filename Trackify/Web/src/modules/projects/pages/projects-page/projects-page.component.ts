import { ProjectsService } from './../../services/projects.service';
import { ProjectModel } from './../../models/project.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  data: ProjectModel[] = [];

  displayedColumns: string[] = ['projectName', 'description', 'actions'];

  constructor(private router: Router, private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.getUserProjects().subscribe(
      (data) => {
        this.data = data;
        console.log(this.data);
      }
    );
  }

  onViewDetails(project: ProjectModel): void {
    this.router.navigate(['auth/projects', project.id]);
  }

}
