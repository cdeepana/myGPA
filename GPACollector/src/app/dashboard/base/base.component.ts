import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/_services/dashboard.service';
import { Event_emitterCustomService } from 'src/app/_services/event_emitterCustom.service';


@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  semDetails: any;
  viewSubject: any;
  OTC:any;
  parentItem = 'lamp';

  constructor(private dashboardService: DashboardService, private eventEmitterService : Event_emitterCustomService) { }

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
    console.log("viewSem",this.viewSubject);
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

  semConfigRerun(viewSubject){
    this.eventEmitterService.onSemConfigReRun(viewSubject)
  }

  cancelRegisterMode() {
    console.log("clicked");
    this.ngOnInit();
  }

  deletesem(){
    console.log("delete sem is ",this.viewSubject);
    this.dashboardService.deleteASem({userID: (this.viewSubject.userID), numberOfSem: this.viewSubject.numberOfSem, yearOfSem: this.viewSubject.yearOfSem}).subscribe(data=>{
      console.log(data);
    },error=>{
      console.log("error delete sem", error);
    })
  }
  

 

}
