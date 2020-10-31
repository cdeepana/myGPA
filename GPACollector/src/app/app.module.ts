import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { HeaderInitializationInterceptor } from './_interceptor/header-initialization.interceptor';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
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
      FormsModule,
      MatDialogModule,
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MDBBootstrapModule.forRoot()
      
   ],
   providers: [
      { provide: HTTP_INTERCEPTORS, useClass: HeaderInitializationInterceptor, multi: true },
       Event_emitterCustomService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
