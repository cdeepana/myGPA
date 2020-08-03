import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  dynamicForm: FormGroup;
    submitted = false;
    numberOfSubjects:number;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.numberOfSubjects=0;
    this.dynamicForm = this.formBuilder.group({
      tickets: new FormArray([])
  });
  }

  
    // convenience getters for easy access to form fields
    get f() { return this.dynamicForm.controls; }
    get t() { return this.f.tickets as FormArray; }

    addSubject() {
    this.numberOfSubjects +=1;
        if (this.t.length < this.numberOfSubjects) {
            for (let i = this.t.length; i < this.numberOfSubjects; i++) {
                this.t.push(this.formBuilder.group({
                    name: ['', Validators.required],
                    subjectGrade: ['']
                }));
            }
        } else {
            for (let i = this.t.length; i >= this.numberOfSubjects; i--) {
                this.t.removeAt(i);
            }
        }
    }

    onSubmit(data) {
        this.submitted = true;
      console.log("data=>",data);
        // stop here if form is invalid
        if (this.dynamicForm.invalid) {
            return;
        }

        // display form values on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.dynamicForm.value, null, 4));
    }

    onReset() {
        // reset whole form back to initial state
        this.submitted = false;
        this.dynamicForm.reset();
        this.t.clear();
        this.numberOfSubjects=0;
    }

    onClear() {
        // clear errors and reset ticket fields
        this.submitted = false;
        this.t.reset();
    }

}
