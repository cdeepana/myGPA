import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authService: AuthService, private alertify: AlertifyService, private route: Router) { }

  ngOnInit() {
    
  }

  logout(){
    this.authService.removeUserInfo();
    this.route.navigate([''])
    this.alertify.message('Logged Out');
  }

}
