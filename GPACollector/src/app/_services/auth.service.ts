import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable, throwError } from 'rxjs';
import { filter, map} from 'rxjs/operators';
import { catchError, retry } from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import { Router} from '@angular/router'
import { DashboardService } from './dashboard.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper = new JwtHelperService();
  constructor(private http : HttpClient, private route: Router, private dashboard: DashboardService) { }
  
  
  baseUrl= environment.apiUrl;

  isAuthenticated() {

    let userData = localStorage.getItem('token')
    let Uid = localStorage.getItem('Uid')
    if((!!userData) && (!!Uid)){
      return !this.jwtHelper.isTokenExpired(userData);
    }
    return false;
  
  }

  removeUserInfo(){
    localStorage.removeItem('token');
    localStorage.removeItem('isDplus');
    localStorage.removeItem('Uid')
    return 0;
  }

  setUserInfo(user){
    // console.log("user -->",user);
    localStorage.setItem('token', user);
  }

  validate(email, password) {
    // console.log(email,password);
    // return this.http.post(this.baseUrl+"/login", {'username' : email, 'password' : password}).toPromise()
    return this.http.post(this.baseUrl+"/login", {'email' : email, 'password' : password}).pipe(
      map(res=>{
        //  console.log("x value",res)
        //  console.log("XXXXXXXXXX",JSON.stringify(res[1]));
        
        this.dashboard.gatheringUsedID(res['UserID']);
         localStorage.setItem('isDplus', (!res['isDplus'] )? 'false' : 'true' )
         if(res['isDplus']===false){
         this.route.navigate(['dashboard/initialization'])
         }
         else{
          this.route.navigate(['dashboard/base'])
         }
         return res;
        })
    )
  }

  createUser(username,email, password) {
    // console.log("xx",username,email,password);
    // return this.http.post(this.baseUrl+"/login", {'username' : email, 'password' : password}).toPromise()
    return this.http.post(this.baseUrl+"/register", {'username' : username, 'email':email, 'password' : password}).pipe(

      map(res=>{
        // console.log("x value",res['UserID'])
        this.dashboard.gatheringUsedID(res['UserID']);
        return res;
       })
      
    ) 
  }
}

// this.http.get(this.baseUrl+"/getData");