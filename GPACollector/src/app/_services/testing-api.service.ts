import { Injectable } from '@angular/core'
import { HttpClient,HttpHeaders ,} from '@angular/common/http'
import { environment } from '../../environments/environment'

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestingApiService {

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     // 'Content-Type':  'application/json',
  //     'Authorization': 'Bearer '+ localStorage.getItem('token')
  //   })
  // }

  

  constructor(private http: HttpClient) { }

  baseUrl= environment.apiUrl;

  // createAuthorizationHeader(headers: Headers) {
  //   headers.append('Authorization', 'Basic ' +
  //   localStorage.getItem('token')); 
  //   console.log("header==>",Headers);
  // }

  getData(){
    let headers = new Headers();
    // this.createAuthorizationHeader(headers);
    let name= "service data testing";
    console.log(name);
    // let token =localStorage.getItem('token')
    // let x= this.http.post(this.baseUrl+"/checking",{'token': token});
    // return x;
   let url= this.baseUrl+"/test";
   return this.http.get(url).subscribe((data)=>{
     console.log("data ->>",data);
   },(error:any)=>{
    console.error(error);
   });
  }
}
