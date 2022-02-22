import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorServiceCreateComponent } from './doctor-service-create.component';

describe('DoctorServiceCreateComponent', () => {
  let component: DoctorServiceCreateComponent;
  let fixture: ComponentFixture<DoctorServiceCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorServiceCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorServiceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
