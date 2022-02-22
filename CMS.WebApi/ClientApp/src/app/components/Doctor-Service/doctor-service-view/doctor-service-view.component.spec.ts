import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorServiceViewComponent } from './doctor-service-view.component';

describe('DoctorServiceViewComponent', () => {
  let component: DoctorServiceViewComponent;
  let fixture: ComponentFixture<DoctorServiceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorServiceViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorServiceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
