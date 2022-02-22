import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineStockEditComponent } from './medicine-stock-edit.component';

describe('MedicineStockEditComponent', () => {
  let component: MedicineStockEditComponent;
  let fixture: ComponentFixture<MedicineStockEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineStockEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineStockEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
