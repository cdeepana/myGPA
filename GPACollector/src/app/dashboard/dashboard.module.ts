import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { BaseComponent } from './base/base.component';
import { SemesterConfigComponent } from './semester-Config/semester-Config.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    BaseComponent,
    SemesterConfigComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    DashboardRoutingModule,
    CommonModule,
    MDBBootstrapModule.forRoot()
  ]
})


export class DashboardModule { }
