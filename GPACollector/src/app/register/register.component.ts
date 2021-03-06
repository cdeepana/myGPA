import { Component,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AlertifyService} from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


  registerForm:any;

  constructor(private authService : AuthService, private router : Router,private formBuilder: FormBuilder, private alertify: AlertifyService,
    public dialogRef: MatDialogRef<RegisterComponent>
     ) {
      this.registerForm = this.formBuilder.group({
        username: '',
        email: '',
        password: ''
      });
    }

    onNoClick(): void {
      this.dialogRef.close();
    }
  
    onSubmit(data){
      // console.log("register form =>",data);
     
      this.authService.createUser(data.username,data.email, data.password)
      .subscribe((response) => {
        // console.log("response ->",response);
        this.alertify.success('Registration Success');
        this.authService.setUserInfo(response['token']);
        this.dialogRef.close();
        this.router.navigate(['settings/initialization']);
  
      },error=>{
          // console.log("error rees",error.error[Object.keys(error.error)[0]]);  // this would be needed future
          this.alertify.error(error.error.errormsg);

          
          // console.log(errormsg);
          // this.registerForm.reset()
        
      })
    }

    loginUser(){
      this.dialogRef.close("loginUser");
    }

}
