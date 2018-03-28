import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepratmentLitComponent } from './depratment-lit.component';

describe('DepratmentLitComponent', () => {
  let component: DepratmentLitComponent;
  let fixture: ComponentFixture<DepratmentLitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepratmentLitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepratmentLitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
