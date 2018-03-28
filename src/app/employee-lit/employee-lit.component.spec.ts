import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLitComponent } from './employee-lit.component';

describe('EmployeeLitComponent', () => {
  let component: EmployeeLitComponent;
  let fixture: ComponentFixture<EmployeeLitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeLitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
