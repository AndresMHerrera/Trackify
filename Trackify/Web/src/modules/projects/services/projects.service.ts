import { ProjectModel } from './../models/project.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpService } from 'src/modules/core/services/base/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService extends BaseHttpService {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'projects');
  }

  getUserProjects(): Observable<ProjectModel[]> {
    // return this.get<ProjectModel[]>();
    return of([
      { id: '0', name: 'Trackify', description: 'A project to track user tasks.' },
      { id: '0', name: 'Shopify', description: 'This is a eCommerce software.' }
    ]);
  }

  getProjectById(id: string): Observable<ProjectModel> {
    return of({ id: '0', name: 'Trackify', description: 'A project to track user tasks.' });
  }
}
