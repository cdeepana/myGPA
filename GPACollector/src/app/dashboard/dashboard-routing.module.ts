import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService as AuthGuard } from '../_services/auth-guard.service';
import { InitializationComponent } from './initialization/initialization.component';
import { BaseComponent } from './base/base.component';


const routes: Routes = [
  {path:'initialization', component: InitializationComponent},
  {path: 'base' , component: BaseComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }