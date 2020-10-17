import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  isOTC: boolean
  
  constructor(private alertify: AlertifyService) { 
    this.isOTC= false
  }

  ngOnInit() {
  }

  OTC(){
    this.isOTC = true;
  }
  getProfile(){
    this.alertify.warning('account page is not completed')
  }
}
