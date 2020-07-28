import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService as AuthGuard } from '../_services/auth-guard.service';
import { Initialization01Component } from './initialization01/initialization01.component';


const routes: Routes = [
  // { path: '', component: HomepageComponent },
  // { path: 'dashboard', loadChildren: "./pastevent/pastevent.module#PasteventModule"},
  // { path: 'login', component: LoginComponent, canActivate: [DeactivateAuthGuard]},
  // {path: 'dashboard', component: DashboardComponent , canActivate:[AuthGuard]},
  // { path: '**', redirectTo: '', pathMatch: 'full' }
  // {path: 'sss', component: Initialization01Component},
  {path:'xxx', component: Initialization01Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRouting2Module { }


// RouterModule.forRoot([
//   { path: '', component: ProductListComponent },
//   { path: 'products/:productId', component: ProductDetailsComponent },
// ])