import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';



@NgModule({
  declarations: [
    DashboardPageComponent,
    EventsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SummaryModule { }
