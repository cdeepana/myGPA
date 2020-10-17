import { Component, OnInit ,HostListener} from '@angular/core';
import { Router } from '@angular/router'
import { AlertifyService} from '../../_services/alertify.service'
import { DashboardService } from 'src/app/_services/dashboard.service'

import {modelOTC} from './model-OTC';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-otc',
  templateUrl: './otc.component.html',
  styleUrls: ['./otc.component.scss']
})
export class OtcComponent implements OnInit {

  isDplus: boolean;
  isForm01: boolean
  // model = new modelOTC(4.2, 4.0, 3.7, 3.3, 3.0, 2.7, 2.3, 2.0, 1.5, 1.3, 1.0, 0, 0, 3.7, 3.30, 3.69, 3.00, 3.29, 2.00, 2.99);
    model = new modelOTC(4.2, 4.0, 3.7, 3.3, 3.0, 2.7, 2.3, 2.0, 1.5, 1.3, 1.0, 0, 0, 3.7, 3.30, 3.69, 3.00, 3.29, 2.00, 2.99);

  constructor(private router : Router,private alertify: AlertifyService, private dashboardService: DashboardService , private authService : AuthService) { }

  ngOnInit() {
    this.model = new modelOTC(4.2, 4.0, 3.7, 3.3, 3.0, 2.7, 2.3, 2.0, 1.5, 0, 1.0, 0, 0, 3.7, 3.30, 3.69, 3.00, 3.29, 2.00, 2.99);
    console.log("testing ok")
    this.isForm01 = true;
  }

  @HostListener('window:beforeunload', ['$event'])
  WindowBeforeUnoad($event: any) {

    console.log("REFRESH OCCURED");
    this.dashboardService.unloadOccuring();
  }

  reset(){
    this.model = new modelOTC(4.2, 4.0, 3.7, 3.3, 3.0, 2.7, 2.3, 2.0, 1.5, 0, 1.0, 0, 0, 3.7, 3.30, 3.69, 3.00, 3.29, 2.00, 2.99);
    console.log("reset method fired");
  }

  checked(){
    this.isDplus = (this.isDplus) ? false: true;
    console.log("checked");
    this.model.Ctrl_C_minus = (this.isDplus) ? 1.7 : 1.5
    this.model.Ctrl_D_plus = (this.isDplus) ? 1.3: null
  }
  onSubmit(data){
    console.log("submit data data",data)
    this.isForm01 = false
    
  }
  OTCSubmit(){
    console.log("otc completed", this.model);
    this.dashboardService.onetimeConfig(this.model).subscribe(
      response => {
        console.log("res", response)
        this.alertify.success("one time configuration successful")
        this.router.navigate(['dashboard/base'])
      },
      error => {
        console.log(error);
        this.alertify.error("Warning, Log In first and Try again")
        this.authService.removeUserInfo();
        this.router.navigate([''])
      }
    )
  }


}
