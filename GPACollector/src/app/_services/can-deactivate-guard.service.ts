import { Injectable } from '@angular/core';
import { CanActivate ,Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})


export class LoggedInAuthGuardService implements  CanActivate {

  constructor(private authService : AuthService, private route : Router) { }

  canActivate(){

    if(this.authService.isAuthenticated()){
      this.route.navigate(['dashboard/base']);
      return false;
    }
    
    return true;
  }
}