import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SFSectionComponent } from './sf-section.component';

describe('SFSectionComponent', () => {
  let component: SFSectionComponent;
  let fixture: ComponentFixture<SFSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SFSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SFSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
