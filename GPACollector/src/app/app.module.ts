import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TestingApiService } from './_services/testing-api.service';

@NgModule({
   declarations: [
      AppComponent,
      HomepageComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [TestingApiService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
