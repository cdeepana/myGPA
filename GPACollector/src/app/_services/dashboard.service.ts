import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  UserID
  OTC
  UsedID2

  constructor(private http: HttpClient) {
    this.UserID = localStorage.getItem('UserID')
     
  }

  baseUrl = environment.apiUrl;

    public isDplus() {
      return localStorage.getItem('isDplus')
    }

    public onetimeConfig(formA, formB) {   // one time config form submission 
      console.log("xx", formA, "b", formB, "userid2", this.UsedID2);
      localStorage.setItem('isDplus', (!formA['Ctrl_D_plus']) ? 'false' : 'true')
      return this.http.post(this.baseUrl + "/onetimeconfig", [formA, formB, { UserID: this.UserID }]).pipe()
    }

    public createOrUpdateSem(data) {   // one time config form submission 
      return this.http.post(this.baseUrl + "/createsem", [data, { UserID: this.UserID }]).pipe()
    }

    public deleteASem(data) {   // one time config form submission 
      return this.http.delete(this.baseUrl + "/deletesem", {params:data}).pipe()
    }

    public getSems(){
      let params = new HttpParams();
      params = params.append('UserID', this.UserID);
      return this.http.get(this.baseUrl + '/getsems',{params: params}).pipe()
    }

    public getOnetimeConfig(){

        let params = new HttpParams();
        params = params.append('UserID', this.UserID);
       
        return this.http.get(this.baseUrl + '/getOTC' , {params:params} ).pipe(
        )
      
      
    }
    public gatheringUsedID(ID2){
      this.UsedID2 = ID2;
      console.log("saved user id", this.UsedID2);
    }
}
