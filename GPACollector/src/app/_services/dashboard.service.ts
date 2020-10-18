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
  OTC: boolean

  constructor(private http: HttpClient) {
     
  }

  baseUrl = environment.apiUrl;

    public isDplus() {
      return localStorage.getItem('isDplus')
    }

    public onetimeConfig(form) {   // one time config form submission 
      this.UserID = (!!this.UserID)? this.UserID : localStorage.getItem('Uid') 
    //  console.log("form['Ctrl_D_plus']",form['Ctrl_D_plus']);
      localStorage.setItem('isDplus', (!form['Ctrl_D_plus']) ? 'false' : 'true')
      // localStorage.removeItem('Uid')
      return this.http.post(this.baseUrl + "/onetimeconfig", [form, { UserID: this.UserID}]).pipe()
    }



    public createOrUpdateSem(data) {   // one time config form submission 
      // console.log("data create seem ",data);
      return this.http.post(this.baseUrl + "/createsem", [data, { UserID: this.UserID }]).pipe()
    }

    public deleteASem(data) {   // one time config form submission 
      return this.http.delete(this.baseUrl + "/deletesem", {params:data}).pipe()
    }

    public getSems(){
      this.UserID = (!!this.UserID)? this.UserID : localStorage.getItem('Uid') 
      // console.log("getsem uID====>", this.UserID);
      let params = new HttpParams();
      params = params.append('UserID',  this.UserID );
      // localStorage.removeItem('Uid')
      return this.http.get(this.baseUrl + '/getsems',{params: params}).pipe()
    }

    public getOnetimeConfig(){

        let params = new HttpParams();
        params = params.append('UserID', this.UserID);
       
        return this.http.get(this.baseUrl + '/getOTC' , {params:params} ).pipe(
          map(res => {
            this.OTC = true
            return res
          })
        )
    }
    public gatheringUsedID(ID){
      this.UserID = ID;
      localStorage.setItem('Uid',this.UserID)
      // console.log("saved user id", this.UserID);
    }

    public unloadOccuring(){
      if(this.UserID){
        localStorage.setItem('Uid',this.UserID)
      }
    }
    public getUser(){
      // console.log("this.UserID",this.UserID);
      let params = new HttpParams();
      params = params.append('UserID', (!!this.UserID)? this.UserID : localStorage.getItem('Uid') );
      return this.http.get(this.baseUrl + '/getUser', { params: params } ).pipe()
    }
}
