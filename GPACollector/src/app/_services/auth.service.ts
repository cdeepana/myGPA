import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper = new JwtHelperService();
  constructor(private http : HttpClient) { }
  
  
  baseUrl= environment.apiUrl;

  public isAuthenticated() {

    let userData = localStorage.getItem('token')
    if(userData){
      return !this.jwtHelper.isTokenExpired(userData);
    }
    return false;
  
  }

  public removeUserInfo(){
    localStorage.removeItem('token');
    return 0;
  }

  public setUserInfo(user){
    console.log("user -->",user);
    localStorage.setItem('token', user);
  }

  public validate(email, password) {
    console.log(email,password);
    // return this.http.post(this.baseUrl+"/login", {'username' : email, 'password' : password}).toPromise()
    return this.http.post(this.baseUrl+"/login", {'email' : email, 'password' : password}).pipe(
      
    )
  }

  public createUser(username,email, password) {
    console.log("xx",username,email,password);
    // return this.http.post(this.baseUrl+"/login", {'username' : email, 'password' : password}).toPromise()
    return this.http.post(this.baseUrl+"/register", {'username' : username, 'email':email, 'password' : password}).pipe(
      
    )
  }
}

// this.http.get(this.baseUrl+"/getData");