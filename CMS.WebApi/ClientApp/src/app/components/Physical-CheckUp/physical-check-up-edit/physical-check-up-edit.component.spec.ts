import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalCheckUpEditComponent } from './physical-check-up-edit.component';

describe('PhysicalCheckUpEditComponent', () => {
  let component: PhysicalCheckUpEditComponent;
  let fixture: ComponentFixture<PhysicalCheckUpEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicalCheckUpEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalCheckUpEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
