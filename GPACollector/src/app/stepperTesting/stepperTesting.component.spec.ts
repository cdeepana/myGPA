/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StepperTestingComponent } from './stepperTesting.component';

describe('StepperTestingComponent', () => {
  let component: StepperTestingComponent;
  let fixture: ComponentFixture<StepperTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
