import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { HeaderInitializationInterceptor } from './_interceptor/header-initialization.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TestingApiService } from './_services/testing-api.service';
import { SigninsignupComponent } from './signinsignup/signinsignup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
   declarations: [
      AppComponent,
      HomepageComponent,
      SigninsignupComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [TestingApiService,
      { provide: HTTP_INTERCEPTORS, useClass: HeaderInitializationInterceptor, multi: true }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
