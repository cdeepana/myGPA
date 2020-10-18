import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DashboardModule } from './dashboard/dashboard.module'

import { MatDialogModule} from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { HeaderInitializationInterceptor } from './_interceptor/header-initialization.interceptor';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TestingApiService } from './_services/testing-api.service';
import { LoginComponent } from './login/login.component';
import { AlertifyService } from './_services/alertify.service';
import { RegisterComponent } from './register/register.component';
// import { MatStepperModule } from '@angular/material/stepper';
import { MatStepperModule } from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Event_emitterCustomService } from './_services/event_emitterCustom.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AboutComponent } from './about/about.component';





@NgModule({
   declarations: [			
      AppComponent,
      HomepageComponent,
      LoginComponent,
      RegisterComponent,
      NavBarComponent,
      AboutComponent,
   ],
   imports: [
      // DashboardModule,
      FormsModule,
      MatDialogModule,
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatSliderModule,
      MatStepperModule,
      MatInputModule,
      MatButtonModule,
      MatAutocompleteModule,
      MatFormFieldModule,
      // MatHorizontalStepper
      MDBBootstrapModule.forRoot()
      

   ],
   providers: [TestingApiService,
      { provide: HTTP_INTERCEPTORS, useClass: HeaderInitializationInterceptor, multi: true },
      AlertifyService, Event_emitterCustomService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
