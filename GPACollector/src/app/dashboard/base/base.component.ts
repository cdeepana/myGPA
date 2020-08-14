import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/_services/dashboard.service';


@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  semDetails: any;
  viewSubject: any;
  OTC:any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    // start
    // stop
    this.getSemDetails()
  }

  getSemDetails(){
    this.dashboardService.getSems().subscribe(data=>{
      this.semDetails = data;
      this.semDetails = this.semDetails.semesters
      console.log("data get sem", this.semDetails);
    this.getOnetimeConfig()
    },error=>{
      console.log(error);
    })
  }

  viewSem(viewNUmber){
    this.viewSubject = this.semDetails[viewNUmber]
    // this.viewSubject = JSON.stringify(this.viewSubject)
    console.log("viewSem", this.viewSubject);
  }

  getOnetimeConfig(){
      this.dashboardService.getOnetimeConfig()
    .subscribe(data=>{
      console.log("get OTC",data['OTC']);
      this.OTC = data['OTC']
    },error=>{
      console.log("error", error);
    })
  }

 

}
