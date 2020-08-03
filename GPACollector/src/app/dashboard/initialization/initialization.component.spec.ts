/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InitializationComponent } from './initialization.component';

describe('InitializationComponent', () => {
  let component: InitializationComponent;
  let fixture: ComponentFixture<InitializationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitializationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
