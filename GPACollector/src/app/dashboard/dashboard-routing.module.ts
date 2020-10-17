import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService as AuthGuard } from '../_services/auth-guard.service';
import { BaseComponent } from './base/base.component';
import { OtcComponent } from './otc/otc.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {path: 'base' , component: BaseComponent,canActivate:[AuthGuard]},
  {path: 'initialization' , component: OtcComponent},
  {path: 'settings' , component: SettingsComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }