import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService as AuthGuard } from '../_services/auth-guard.service';
import { BaseComponent } from './base/base.component';
import { OtcComponent } from './otc/otc.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {path: 'base' , component: BaseComponent,canActivate:[AuthGuard]},
  {path: 'initialization' , component: OtcComponent, canActivate:[AuthGuard]},
  {path: 'settings' , component: SettingsComponent,canActivate:[AuthGuard]},
  // {path: 'profile' , component: ProfileComponent , canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }