import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HeroFormComponent } from '../hero-form/hero-form.component';
import { canActivateTeam } from '../permissions.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'hero-form',
    component: HeroFormComponent,
    canActivate: [canActivateTeam],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
