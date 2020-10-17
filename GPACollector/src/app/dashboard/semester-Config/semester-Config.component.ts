import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import 'bootstrap'
import { disable } from 'colors';
import * as $ from 'jquery'
import { AlertifyService } from 'src/app/_services/alertify.service';
import { DashboardService } from 'src/app/_services/dashboard.service';
import { Event_emitterCustomService } from 'src/app/_services/event_emitterCustom.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-semester-Config',
  templateUrl: './semester-Config.component.html',
  styleUrls: ['./semester-Config.component.css']
})
export class SemesterConfigComponent implements OnInit {

    
  @Output() cancelRegister = new EventEmitter();
  dynamicForm: FormGroup;
  submitted = false;
  numberOfSubjects:number;
  isDplus: boolean;
  viewSubject : any

  constructor(private formBuilder: FormBuilder,private dashboardService: DashboardService,
    private eventEmitterService: Event_emitterCustomService, private alertify: AlertifyService, private route: Router) { }

    ngOnInit() {

        if (this.eventEmitterService.subVar == undefined) {
            this.eventEmitterService.subVar = this.eventEmitterService.
            invokeSemesterConfigComponentFunction.subscribe((viewSubject: Object) => {
                    this.viewSubject = viewSubject? viewSubject: null
                    this.dynamicFormCreation();
                });
        }
        this.dynamicFormCreation();
      
    }
    dynamicFormCreation(){
        this.isDplus = (this.dashboardService.isDplus() == 'true')
        if(!this.viewSubject)
        {
            $('[data-toggle="tooltip"]').tooltip();  // tooltip enabling 
        this.numberOfSubjects = 0;
        this.dynamicForm = this.formBuilder.group({
            yearOfSem: ['', Validators.required],
            numberOfSem: ['', Validators.required],
            subS: new FormArray([])
        });
        this.addSubject(true,null);
        }
        else
        {
            $('[data-toggle="tooltip"]').tooltip();  // tooltip enabling 
            this.numberOfSubjects = 0;
            this.dynamicForm = this.formBuilder.group({
                yearOfSem: [this.viewSubject.yearOfSem,  Validators.required],
                numberOfSem: [this.viewSubject.numberOfSem, Validators.required],
                subS: new FormArray([])
            });
            this.testing(this.viewSubject);
        }



    }

    // convenience getters for easy access to form fields
    get f() { return this.dynamicForm.controls; }
    get t() { return this.f.subS as FormArray; }

    addSubject(istrue,updateValues) {
       this.numberOfSubjects += (istrue) ? 1:-1;
        if (this.t.length < this.numberOfSubjects) {
            for (let i = this.t.length; i < this.numberOfSubjects; i++) {
                this.t.push(this.formBuilder.group({
                    name: [(updateValues)? updateValues.name: '', Validators.required],
                    credit: [(updateValues)? updateValues.credit:'', Validators.required],
                    subjectGrade: [(updateValues)? updateValues.subjectGrade:'']
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
        
        // console.log("dynamicForm",this.dynamicForm);
        // return;
        // data.numberOfSem = parseInt(data.numberOfSem.split('')[0]);
        data.yearOfSem = parseInt(data.yearOfSem);  
        data.numberOfSem = parseInt(data.numberOfSem); 
        // console.log("new sem form",data);
        // console.log("testing data002", data);
        this.dashboardService.createOrUpdateSem(data).subscribe(res=>{
            
        this.alertify.success('Successfully updated Semester');
            this.cancelRegister.emit();
            // window.location.reload()
        
        },
        error=>{
            console.log("error",error)
            this.route.navigate(['dashboard/settings'])
            this.alertify.error('Please Update Configuaraion First');
        })
    }

    testing(data){
        // console.log("teesting event pass binding",data);
        // console.log("length of subject array",data.semInfo[0].length);
        data.semInfo[0].forEach((element,index) => {
            // console.log("elemtn",index,element);
            this.addSubject(true,element);
        });
        // this.addSubject(true);
    }

}
