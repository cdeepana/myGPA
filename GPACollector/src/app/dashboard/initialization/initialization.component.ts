import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService} from '../../_services/alertify.service';

@Component({
  selector: 'app-initialization',
  templateUrl: './initialization.component.html',
  styleUrls: ['./initialization.component.css']
})
export class InitializationComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private router : Router,private alertify: AlertifyService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      Ctrl_A_plus: [4.2, Validators.required],
      Ctrl_A: [4.0, Validators.required],
      Ctrl_A_minus: [3.7, Validators.required],
      Ctrl_B_plus: [3.3, Validators.required],
      Ctrl_B: [3.0, Validators.required],
      Ctrl_B_minus: [2.7, Validators.required],
      Ctrl_C_plus: [2.3, Validators.required],
      Ctrl_C: [2.0, Validators.required],
      Ctrl_C_minus: [1.5, Validators.required],
      Ctrl_D: [1.0, Validators.required],
      Ctrl_I: [0.0, Validators.required],
      Ctrl_F: [0.0, Validators.required,]

    });
    this.secondFormGroup = this._formBuilder.group({
      Ctrl_FirstMin: [3.70, Validators.required],
      Ctrl_FirstMax: ['above', Validators.required],
      Ctrl_SecondUpperMin: [3.30, Validators.required],
      Ctrl_SecondUpperMax: [3.69, Validators.required],
      Ctrl_SecondLowerMin: [3.00, Validators.required],
      Ctrl_SecondLowerMax: [3.29, Validators.required],
      Ctrl_PassMin: [2.00, Validators.required],
      Ctrl_PassMax: [2.99, Validators.required]
    });
  }

  onSubmit_Credit(data){
    console.log("data of credit grade", data);
  }

  onSubmit_Class(data){
    console.log("data of class",data);
  }

  route(){
    this.alertify.success('Settings Saved');
    this.router.navigate(['dashboard/base']);
  }

}
