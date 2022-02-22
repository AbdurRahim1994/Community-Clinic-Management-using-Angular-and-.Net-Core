import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalCheckUpPrintComponent } from './physical-check-up-print.component';

describe('PhysicalCheckUpPrintComponent', () => {
  let component: PhysicalCheckUpPrintComponent;
  let fixture: ComponentFixture<PhysicalCheckUpPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicalCheckUpPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalCheckUpPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
