import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  isProfile: boolean
  
  constructor() { 
    this.isProfile = true;
  }

  ngOnInit() {
  }

  OTC(){
    this.isProfile = false

  }
  getProfile(){
    this.isProfile = true
  }
}
