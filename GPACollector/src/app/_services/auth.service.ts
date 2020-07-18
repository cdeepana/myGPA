import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
  
  
  baseUrl= environment.apiUrl;

  public isAuthenticated() : Boolean {
    let userData = localStorage.getItem('token')
    if(userData){
      return true;
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
    return this.http.post(this.baseUrl+"/login", {'username' : email, 'password' : password}).toPromise()
  }
}

// this.http.get(this.baseUrl+"/getData");