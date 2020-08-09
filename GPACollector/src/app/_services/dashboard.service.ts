import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

constructor(private http : HttpClient) { }


  baseUrl= environment.apiUrl;



  public onetimeConfig(formA,formB) {
    // console.log("xx",username,email,password);
    // return this.http.post(this.baseUrl+"/login", {'username' : email, 'password' : password}).toPromise()
    return this.http.post(this.baseUrl+"/onetimeconfig", [formA,formB]).pipe(
      
    )
  }

}
