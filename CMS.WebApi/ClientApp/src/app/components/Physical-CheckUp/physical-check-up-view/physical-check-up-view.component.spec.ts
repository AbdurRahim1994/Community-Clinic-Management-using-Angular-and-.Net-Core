import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalCheckUpViewComponent } from './physical-check-up-view.component';

describe('PhysicalCheckUpViewComponent', () => {
  let component: PhysicalCheckUpViewComponent;
  let fixture: ComponentFixture<PhysicalCheckUpViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicalCheckUpViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalCheckUpViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
