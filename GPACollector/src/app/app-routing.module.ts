import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoggedInAuthGuardService as DeactivateAuthGuard } from '../app/_services/can-deactivate-guard.service';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', component: HomepageComponent ,canActivate: [DeactivateAuthGuard]},
  { path: 'about', component: AboutComponent },
  // { path: 'dashboard', loadChildren: "./dashboard/dashboard.module#DashboardModule"},
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  },
  // { path: 'login', component: LoginComponent, canActivate: [DeactivateAuthGuard]},
  // {path: 'dashboard', component: DashboardComponent , canActivate:[AuthGuard]},
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// RouterModule.forRoot([
//   { path: '', component: ProductListComponent },
//   { path: 'products/:productId', component: ProductDetailsComponent },
// ])