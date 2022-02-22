import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineStockViewComponent } from './medicine-stock-view.component';

describe('MedicineStockViewComponent', () => {
  let component: MedicineStockViewComponent;
  let fixture: ComponentFixture<MedicineStockViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineStockViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineStockViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
