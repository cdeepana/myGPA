import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsRoutingModule} from './settings-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { OtcComponent } from './otc/otc.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';




@NgModule({
  declarations: [
    OtcComponent,
    SettingsComponent,
    ProfileComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatCheckboxModule,
    SettingsRoutingModule,
    CommonModule,
    MDBBootstrapModule.forRoot()
  ]
})


export class SettingsModule { }
