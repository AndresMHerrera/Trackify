import { SharedModule } from './../modules/shared/shared.module';
import { ProjectsModule } from './../modules/projects/projects.module';
import { SummaryModule } from './../modules/summary/summary.module';
import { CoreModule } from './../modules/core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SummaryModule,
    BrowserAnimationsModule,
    ProjectsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
