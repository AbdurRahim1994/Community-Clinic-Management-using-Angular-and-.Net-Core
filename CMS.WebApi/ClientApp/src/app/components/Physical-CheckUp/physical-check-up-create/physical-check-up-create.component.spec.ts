import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalCheckUpCreateComponent } from './physical-check-up-create.component';

describe('PhysicalCheckUpCreateComponent', () => {
  let component: PhysicalCheckUpCreateComponent;
  let fixture: ComponentFixture<PhysicalCheckUpCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicalCheckUpCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalCheckUpCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
