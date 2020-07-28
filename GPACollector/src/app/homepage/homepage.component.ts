import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {MatDialog} from '@angular/material/dialog';
import {LoginComponent} from './../login/login.component';
import {RegisterComponent} from './../register/register.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private authTest: AuthService,public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  Login(): void {
    console.log("clickd login");
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(data => {
      console.log('The dialog was closed data is :',data);
      if(data=="regUser"){
        this.register();
      }
    });
  }

  register(): void {
    console.log("clickd reg");
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(data => {
      console.log('The dialog was closed');
      if(data=="loginUser"){
        this.Login();
      }
    });
  }




}
