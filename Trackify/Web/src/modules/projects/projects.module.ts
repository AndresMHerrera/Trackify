import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ProjectDetailsPageComponent } from './pages/project-details-page/project-details-page.component';



@NgModule({
  declarations: [
    ProjectsPageComponent,
    ProjectDetailsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProjectsModule { }
