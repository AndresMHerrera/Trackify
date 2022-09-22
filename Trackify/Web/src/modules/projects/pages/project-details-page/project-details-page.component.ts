import { ProjectsService } from './../../services/projects.service';
import { ProjectModel } from './../../models/project.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, Observable } from 'rxjs';

@Component({
  selector: 'app-project-details-page',
  templateUrl: './project-details-page.component.html',
  styleUrls: ['./project-details-page.component.scss']
})
export class ProjectDetailsPageComponent implements OnInit {
  project$: Observable<ProjectModel>;

  constructor(private projectsService: ProjectsService, private activatedRoute: ActivatedRoute) {
    this.project$ = this.activatedRoute.params.pipe(
      mergeMap(params => this.projectsService.getProjectById(params['id']))
    );
  }

  ngOnInit(): void {
  }

}
