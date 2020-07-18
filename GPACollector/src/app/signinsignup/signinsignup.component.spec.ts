import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninsignupComponent } from './signinsignup.component';

describe('SigninsignupComponent', () => {
  let component: SigninsignupComponent;
  let fixture: ComponentFixture<SigninsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
