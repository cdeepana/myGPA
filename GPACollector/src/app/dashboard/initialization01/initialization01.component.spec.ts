import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Initialization01Component } from './initialization01.component';

describe('Initialization01Component', () => {
  let component: Initialization01Component;
  let fixture: ComponentFixture<Initialization01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Initialization01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Initialization01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
