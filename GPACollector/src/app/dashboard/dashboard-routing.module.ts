import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService as AuthGuard } from '../_services/auth-guard.service';
import { BaseComponent } from './base/base.component';


const routes: Routes = [
  {path: 'base' , component: BaseComponent,canActivate:[AuthGuard]}
  // {path: 'profile' , component: ProfileComponent , canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }