import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService as AuthGuard } from '../app/_services/auth-guard.service';
import { LoggedInAuthGuardService as DeactivateAuthGuard } from '../app/_services/can-deactivate-guard.service';
import { StepperTestingComponent } from './stepperTesting/stepperTesting.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'aaa', component: StepperTestingComponent},
  // { path: 'dashboard', loadChildren: "./dashboard/dashboard.module#DashboardModule"},
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
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