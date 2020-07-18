import { Component, OnInit } from '@angular/core';
import { AuthService } from '..//_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userEmail = "admin";
  userPassword = "admin";

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
    
  }


  login(){
    this.authService.validate(this.userEmail, this.userPassword)
    .then((response) => {
      console.log("response ->",response);
      this.authService.setUserInfo(response['token']);
      this.router.navigate(['home']);

    })
  }

  logout(){
    this.authService.removeUserInfo();
  }

}
