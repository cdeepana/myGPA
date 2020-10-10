import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AlertifyService} from '../../_services/alertify.service'
import { DashboardService } from 'src/app/_services/dashboard.service'

@Component({
  selector: 'app-initialization',
  templateUrl: './initialization.component.html',
  styleUrls: ['./initialization.component.css']
})
export class InitializationComponent implements OnInit {

  isLinear = false
  isDplus = false
  formA = {Ctrl_A_plus:4.2, Ctrl_A:4.0, Ctrl_A_minus:3.7, Ctrl_B_plus:3.3, Ctrl_B:3.0, Ctrl_B_minus:2.7, Ctrl_C_plus:2.3, Ctrl_C:2.0, Ctrl_C_minus:1.5, Ctrl_D_plus: 1.3 ,Ctrl_D:1.0, Ctrl_I:0, Ctrl_F:0 }    //firstFormArray
  formB = {Ctrl_FirstMin:3.7, Ctrl_SecondUpperMin:3.30,Ctrl_SecondUpperMax:3.69,Ctrl_SecondLowerMin:3.00,Ctrl_SecondLowerMax:3.29,Ctrl_PassMin:2.00,Ctrl_PassMax:2.99}   //secondFormArray
  firstFormGroup: FormGroup
  secondFormGroup: FormGroup

  constructor(private _formBuilder: FormBuilder, private router : Router,private alertify: AlertifyService, private dashboardService: DashboardService) {
    this.formA.Ctrl_D_plus = this.isDplus ? 1.3: null
   }

  ngOnInit() {
    if (!this.isDplus) {
      this.firstFormGroup = this._formBuilder.group({
        Ctrl_A_plus: [this.formA.Ctrl_A_plus, Validators.required],
        Ctrl_A: [this.formA.Ctrl_A, Validators.required],
        Ctrl_A_minus: [this.formA.Ctrl_A_minus , Validators.required],
        Ctrl_B_plus: [this.formA.Ctrl_B_plus, Validators.required],
        Ctrl_B: [this.formA.Ctrl_B, Validators.required],
        Ctrl_B_minus: [this.formA.Ctrl_B_minus, Validators.required],
        Ctrl_C_plus: [this.formA.Ctrl_C_plus, Validators.required],
        Ctrl_C: [this.formA.Ctrl_C, Validators.required],
        Ctrl_C_minus: [this.formA.Ctrl_C_minus, Validators.required],
        Ctrl_D: [this.formA.Ctrl_D, Validators.required],
        Ctrl_I: [this.formA.Ctrl_I, Validators.required],
        Ctrl_F: [this.formA.Ctrl_F, Validators.required,]
      });
    } 
    else {
      this.firstFormGroup = this._formBuilder.group({
        Ctrl_A_plus: [this.formA.Ctrl_A_plus, Validators.required],
        Ctrl_A: [this.formA.Ctrl_A, Validators.required],
        Ctrl_A_minus: [this.formA.Ctrl_A_minus , Validators.required],
        Ctrl_B_plus: [this.formA.Ctrl_B_plus, Validators.required],
        Ctrl_B: [this.formA.Ctrl_B, Validators.required],
        Ctrl_B_minus: [this.formA.Ctrl_B_minus, Validators.required],
        Ctrl_C_plus: [this.formA.Ctrl_C_plus, Validators.required],
        Ctrl_C: [this.formA.Ctrl_C, Validators.required],
        Ctrl_C_minus: [this.formA.Ctrl_C_minus, Validators.required],
        Ctrl_D_plus: [this.formA.Ctrl_D_plus, Validators.required],
        Ctrl_D: [this.formA.Ctrl_D, Validators.required],
        Ctrl_I: [this.formA.Ctrl_I, Validators.required],
        Ctrl_F: [this.formA.Ctrl_F, Validators.required,]
      });    
    }
  
    this.secondFormGroup = this._formBuilder.group({
      Ctrl_FirstMin: [this.formB.Ctrl_FirstMin, Validators.required],
      Ctrl_SecondUpperMin: [this.formB.Ctrl_SecondUpperMin, Validators.required],
      Ctrl_SecondUpperMax: [this.formB.Ctrl_SecondUpperMax, Validators.required],
      Ctrl_SecondLowerMin: [this.formB.Ctrl_SecondLowerMin, Validators.required],
      Ctrl_SecondLowerMax: [this.formB.Ctrl_SecondLowerMax, Validators.required],
      Ctrl_PassMin: [this.formB.Ctrl_PassMin, Validators.required],
      Ctrl_PassMax: [this.formB.Ctrl_PassMax, Validators.required]
    });
    
  }

  Dplus(value){
    this.isDplus = (!this.isDplus) ? value: !value
    console.log("22",this.isDplus);
    this.formA.Ctrl_C_minus = value? 1.7:1.5
    this.formA.Ctrl_D_plus = value ? 1.3: null
    this.ngOnInit();
  }

  onSubmit_Credit(data){
    // console.log("default data", this.formA);
    // console.log("data of credit grade", data);
    this.formA = data;
    console.log('saving data', this.formA);
  }

  onSubmit_Class(data){
    // console.log("default data formb",this.formB);
    // console.log("data of class",data);
    this.formB = data;
    console.log("saving values ",this.formB);
  }

  Done(){
    this.dashboardService.onetimeConfig(this.formA,this.formB)
    .subscribe((response) => {
      console.log("response ->",response);
      this.alertify.success('onetime config Success');
      // this.router.navigate(['dashboard/initialization']);

    },error=>{
        console.log(error);
        // this.alertify.error('Registration Unsuccessful, Retry');
        // this.registerForm.reset()
      
    })


    this.alertify.success('Settings Saved')
    this.router.navigate(['dashboard/base'])
  }

}
