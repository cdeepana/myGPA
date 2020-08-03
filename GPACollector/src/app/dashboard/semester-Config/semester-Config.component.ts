import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService} from '../../_services/alertify.service';

@Component({
  selector: 'app-semester-Config',
  templateUrl: './semester-Config.component.html',
  styleUrls: ['./semester-Config.component.css']
})
export class SemesterConfigComponent implements OnInit {

  semesterCreationFormGroup : FormGroup;
  subjectCount:any;

  constructor(private _formBuilder: FormBuilder, private router : Router,private alertify: AlertifyService) { 

    this.semesterCreationFormGroup = this._formBuilder.group({
      Ctrl_sem01 : ['', ],
      Ctrl_sem02 : ['', ],
      Ctrl_sem03 : ['', ],
      Ctrl_sem04 : ['', ],
      Ctrl_sem05 : ['', ],
      Ctrl_sem06 : ['', ],
      Ctrl_sem07 : ['', ],
      Ctrl_sem08 : ['', ],
      Ctrl_sem09 : ['', ],
      Ctrl_sem10 : ['', ],
      Ctrl_sem11 : ['', ],
      Ctrl_sem12 : ['', ],
      Ctrl_sem13 : ['', ],
      Ctrl_sem14 : ['', ],
      Ctrl_sem15 : ['', ],
      Ctrl_sem16 : ['', ],
      Ctrl_sem17 : ['', ],
      Ctrl_sem18 : ['', ],
      Ctrl_sem19 : ['', ],
      Ctrl_sem20 : ['', ],
      
    });
  }


  ngOnInit() {
    this.subjectCount = 1;
  }

  addSubject(){
    this.subjectCount ++;
  }

  onSubmit_SubjectForm(data){
    console.log(data);

  }

}