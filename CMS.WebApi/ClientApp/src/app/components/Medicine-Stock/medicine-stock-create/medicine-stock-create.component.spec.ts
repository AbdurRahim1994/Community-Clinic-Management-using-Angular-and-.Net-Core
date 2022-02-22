import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineStockCreateComponent } from './medicine-stock-create.component';

describe('MedicineStockCreateComponent', () => {
  let component: MedicineStockCreateComponent;
  let fixture: ComponentFixture<MedicineStockCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineStockCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineStockCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
