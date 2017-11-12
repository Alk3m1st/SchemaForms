import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SfStepComponent } from './sf-step.component';

describe('SfStepComponent', () => {
  let component: SfStepComponent;
  let fixture: ComponentFixture<SfStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SfStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SfStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
