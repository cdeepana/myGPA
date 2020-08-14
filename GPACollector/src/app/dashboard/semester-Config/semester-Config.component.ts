import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';

import 'bootstrap'
import * as $ from 'jquery'
import { DashboardService } from 'src/app/_services/dashboard.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-semester-Config',
  templateUrl: './semester-Config.component.html',
  styleUrls: ['./semester-Config.component.css']
})
export class SemesterConfigComponent implements OnInit {

  dynamicForm: FormGroup;
  submitted = false;
  numberOfSubjects:number;
  isDplus: boolean

  constructor(private formBuilder: FormBuilder,private dashboardService: DashboardService) { }

  

  ngOnInit() {
    
    
    this.isDplus = (this.dashboardService.isDplus()=='true')

    $('[data-toggle="tooltip"]').tooltip();  // tooltip enabling 
    this.numberOfSubjects=0;
    this.dynamicForm = this.formBuilder.group({
        yearOfSem: ['',Validators.required],
        numberOfSem: ['',Validators.required],
      subS: new FormArray([])
  });
  this.addSubject(true);
  }

    // convenience getters for easy access to form fields
    get f() { return this.dynamicForm.controls; }
    get t() { return this.f.subS as FormArray; }

    addSubject(istrue) {
       this.numberOfSubjects += (istrue) ? 1:-1;
        if (this.t.length < this.numberOfSubjects) {
            for (let i = this.t.length; i < this.numberOfSubjects; i++) {
                this.t.push(this.formBuilder.group({
                    name: ['', Validators.required],
                    credit: ['', Validators.required],
                    subjectGrade: ['']
                }));
            }
        } else {
            for (let i = this.t.length; i >= this.numberOfSubjects; i--) {
                this.t.removeAt(i);
            }
        }
    }

    onReset() {
        // reset whole form back to initial state
        this.submitted = false;
        this.dynamicForm.reset();
        this.t.clear();
        this.numberOfSubjects=1;
    }

    onClear() {
        // clear errors and reset ticket fields
        this.submitted = false;
        this.t.reset();
    }

    onSubmit(data){
        // data.numberOfSem = parseInt(data.numberOfSem.split('')[0]);
        data.yearOfSem = parseInt(data.yearOfSem);  
        // data.numberOfSem = parseInt(data.numberOfSem); 
        console.log("new sem form",data);
        this.dashboardService.createSem(data).subscribe((res)=>{
            window.location.reload();
            console.log(res);
        },
        error=>{
            console.log(error)

        })
    }

}
