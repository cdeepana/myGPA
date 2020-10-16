import { Component,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthService } from '..//_services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AlertifyService} from '../_services/alertify.service';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm:any;

  constructor(private authService : AuthService, private router : Router,private formBuilder: FormBuilder, private alertify: AlertifyService,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.loginForm = this.formBuilder.group({
        email: '',
        password: ''
      });
    }




    onNoClick(): void {
      this.dialogRef.close();
    }
  
    onSubmit(data){
      console.log("loginform =>",data);
     
      this.authService.validate(data.email, data.password)
      .subscribe((response) => {
        this.alertify.success('Logged in Success');
        console.log("response ->",response);
        this.authService.setUserInfo(response['token']);
        this.dialogRef.close();
  
      },error=>{
          this.alertify.error('Loging Unsuccessful, Retry');
          this.loginForm.reset()
        
      })
    }

    registerUser(){
      this.dialogRef.close("regUser");
    }
  
    logout(){
      this.authService.removeUserInfo();
      this.alertify.message('Logged Out');
    }

}
