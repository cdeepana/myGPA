import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
// import {Initialization01Component} from './initialization01/initialization01.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatTableModule} from '@angular/material/table';
import {InitializationComponent} from './initialization/initialization.component';
import { BaseComponent } from './base/base.component';
import { SemesterConfigComponent } from './semester-Config/semester-Config.component';
import { TestComponent } from './test/test.component';




@NgModule({
  declarations: [
    InitializationComponent,
    BaseComponent,
    SemesterConfigComponent,
    TestComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatTableModule,
    MatCheckboxModule,
    DashboardRoutingModule,
    CommonModule
  ]
})


export class DashboardModule { }
