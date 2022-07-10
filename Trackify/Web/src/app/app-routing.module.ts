import { ProjectsPageComponent } from './../modules/projects/pages/projects-page/projects-page.component';
import { EventsPageComponent } from './../modules/summary/pages/events-page/events-page.component';
import { DashboardPageComponent } from './../modules/summary/pages/dashboard-page/dashboard-page.component';
import { LayoutComponent } from './../modules/core/components/layout/layout.component';
import { SignupPageComponent } from './../modules/core/pages/signup-page/signup-page.component';
import { LoginPageComponent } from './../modules/core/pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

const indexRoute: Route = {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full',
};

const fallbackRoute: Route = {
  path: '**',
  redirectTo: 'login',
};

const routes: Routes = [
  indexRoute,
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'signup',
    component: SignupPageComponent,
  },
  {
    path: 'auth',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardPageComponent
      },
      {
        path: 'projects',
        children: [
          {
            path: '',
            component: ProjectsPageComponent
          }
        ]
      }
    ]
  },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
