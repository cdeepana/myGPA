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



@NgModule({
   declarations: [
      AppComponent,
      HomepageComponent,
      LoginComponent,
      RegisterComponent
   ],
   imports: [
      DashboardModule,
      MatDialogModule,
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatSliderModule
      

   ],
   providers: [TestingApiService,
      { provide: HTTP_INTERCEPTORS, useClass: HeaderInitializationInterceptor, multi: true },
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
