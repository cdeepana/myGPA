import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TestingApiService {

  constructor(private http: HttpClient) { }

  baseUrl= environment.apiUrl;

  getData(){
    let name= "service data";
    console.log(name);
    let x= this.http.get(this.baseUrl+"/getData");
    return x;
  }
}
