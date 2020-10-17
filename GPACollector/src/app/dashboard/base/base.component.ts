import { Component, OnInit , HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { DashboardService } from 'src/app/_services/dashboard.service';
import { Event_emitterCustomService } from 'src/app/_services/event_emitterCustom.service';
import { Event_emitterNavbarService } from 'src/app/_services/event_emitterNavbar.service';


@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  semDetails: any;
  viewSubject: any;
  OverallGPA: String;
  awardedClass: String;


//  start round
  chartType: string = 'doughnut';

  chartDatasets: Array<any> = [];

  chartLabels: Array<any> = [ 'Good', 'Medium','Weak'];

  chartColors: Array<any> = [
    {
      backgroundColor: ['#32CD32', '#46BFBD','#F7464A' ],
      hoverBackgroundColor: ['#00FF00', '#00FFFF','#FF0000' ],
      borderWidth: 0.75,
    }
  ];
  chartOptions: any = {
    responsive: true
  };

  // finished


  constructor(private dashboardService: DashboardService, private eventEmitterService : Event_emitterCustomService, private navbarRefreshService: Event_emitterNavbarService, private route: Router ,private alertify: AlertifyService) {

    
   }

   chartClicked(event:any){

   }
   chartHovered(event:any){}

  ngOnInit() {
    // window.location.reload()
    this.navbarRefreshService.onNavBarReRun()
    this.getSemDetails()
  }

  @HostListener('window:beforeunload', ['$event'])
  WindowBeforeUnoad($event: any) {
    this.dashboardService.unloadOccuring();
  }

  getSemDetails(){
    this.dashboardService.getSems().subscribe(data=>{
      this.semDetails = data;
      this.semDetails = this.semDetails.semesters
      // console.log("data get sem", this.semDetails);
      this.chartDatasets = []
      this.chartDataSetCreation();
    this.getOnetimeConfig()
    },error=>{
      console.log(error);
    })
  }

  chartDataSetCreation(){
    this.semDetails.forEach(element => {
      // element.semInfo[1].Good
      this.chartDatasets.push([{data: [element.semInfo[1].Good, element.semInfo[1].Medium, element.semInfo[1].Weak] }])
      // console.log("this cart", this.chartDatasets);
    });
    return ;
  }


  viewSem(viewNUmber){
    this.viewSubject = this.semDetails[viewNUmber]
    // console.log("viewSem",this.viewSubject);
  }

  getOnetimeConfig(){
      this.dashboardService.getOnetimeConfig()
    .subscribe(data=>{
      // console.log("get OTC",data['OTC']);
      this.miniCal(data['OTC'])
    },error=>{
      this.route.navigate(['dashboard/settings'])
      this.alertify.error('First Update Configurations')
      console.log("error", error);
    })
  }

  miniCal(OTC){ //   overall gpa calculation and awarded class finding
    let x= 0; 
    let y = 0;
    let clzValue= 0;
    // let OTC : any;
    let multiple = (a,b) => {  // a = sGPa value  ,b = subject credit summation of particular semester
      // console.log("a",a, "b",b, "mul",a*b);
      x += a*b
      y += b
    }
    this.semDetails.forEach(element => {
      multiple(element.semInfo[1].sGpa,element.semInfo[1].sumOfCredit)
    });

    this.OverallGPA = (x/y).toFixed(4);
    // console.log("overall gpa", this.OverallGPA ) ;
    // console.log("OTC in mini cal",OTC);
    clzValue = x/y
   

    if(clzValue >= OTC.class_F_min){
      // console.log("First Class");
      this.awardedClass = "First Class"
    }
    else if( clzValue >= OTC.class_SU_min ){
      // console.log("Second Upper",OTC.class_SU_max,clzValue,OTC.class_SU_min);
      this.awardedClass = " Second Class-Upper Division"
    }
    else if( clzValue >= OTC.class_SL_min ){
      // console.log("Second Lower",OTC.class_SL_max,clzValue,OTC.class_SL_min);
      this.awardedClass = "Second Class-Lower Division"
    }
    else if( clzValue >= OTC.class_pass_min ){
      // console.log("Pass",OTC.class_pass_max,clzValue,OTC.class_pass_min);
      this.awardedClass = "Academic Pass"
    }
    else{      
      // console.log("failed");
      this.awardedClass = "Academic Failed"
    }

  }

  semConfigRerun(viewSubject){
    this.eventEmitterService.onSemConfigReRun(viewSubject)
  }

  cancelRegisterMode() {
    // console.log("clicked");
    this.ngOnInit();
  }

  deletesem(){
    // console.log("delete sem is ",this.viewSubject);
    this.dashboardService.deleteASem({userID: this.viewSubject.userID, numberOfSem: this.viewSubject.numberOfSem, yearOfSem: this.viewSubject.yearOfSem}).subscribe(data=>{
      // console.log(data);
      this.getSemDetails()
    },error=>{
      console.log("error delete sem", error);
    })
  }
}
