import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  isProfile: boolean
  
  constructor(private alertify: AlertifyService, private route: Router) { 
    this.isProfile = true;
  }

  ngOnInit() {
  }

  OTC(){
    this.isProfile = false

  }
  getProfile(){
    this.isProfile = true
    // this.route.navigate(['dashboard/profile'])
    // this.alertify.warning('account page is not completed')
  }
}
