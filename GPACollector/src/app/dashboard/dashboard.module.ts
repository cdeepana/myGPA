import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {Initialization01Component} from './initialization01/initialization01.component';
import {AppRouting2Module} from './app-routing2.module'


@NgModule({
  declarations: [Initialization01Component],
  imports: [AppRouting2Module,
    CommonModule
  ]
  // exports: [RouterModule]
})


export class DashboardModule { }
