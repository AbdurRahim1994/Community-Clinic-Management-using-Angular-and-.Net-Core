import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorServiceEditComponent } from './doctor-service-edit.component';

describe('DoctorServiceEditComponent', () => {
  let component: DoctorServiceEditComponent;
  let fixture: ComponentFixture<DoctorServiceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorServiceEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorServiceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
