import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { Event_emitterNavbarService } from '../_services/event_emitterNavbar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLogged:boolean

  constructor(private authService: AuthService, private alertify: AlertifyService, private route: Router, private navbarRefreshService: Event_emitterNavbarService) {}

  ngOnInit() {

    if (this.navbarRefreshService.subVar == undefined) {
      this.navbarRefreshService.subVar = this.navbarRefreshService.
      invokeNavBarComponentFunction.subscribe((viewSubject: Object) => {
              this.isLogged= true
          });
    }
  }

  gohome(){
    if (this.isLogged) {
      
      if(window.location.pathname!='/dashboard/base'){
        this.route.navigate(['dashboard/base'])
        .then(
          ()=>{ 
            window.location.reload()
          }
        )
      }
    }

    else{
      this.route.navigate([''])
    }
  }
  about(){
    this.route.navigate(['about'])
  }

  logout(){
    this.authService.removeUserInfo();
    this.route.navigate([''])
    this.alertify.message('Logged Out');
    this.isLogged = false
  }

  settings(){
    this.route.navigate(['settings/settings'])
  }

}
