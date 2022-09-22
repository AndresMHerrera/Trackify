import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ProjectDetailsPageComponent } from './pages/project-details-page/project-details-page.component';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    ProjectsPageComponent,
    ProjectDetailsPageComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class ProjectsModule { }
