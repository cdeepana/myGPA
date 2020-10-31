import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/_services/dashboard.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  name : string
  email : string

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {


    this.dashboardService.getUser()
      .subscribe(
        res => {
          this.name = res['data'].username
          this.email = res['data'].email
        },error => {
          console.log("error", error)
        }       
        );
  }



}
