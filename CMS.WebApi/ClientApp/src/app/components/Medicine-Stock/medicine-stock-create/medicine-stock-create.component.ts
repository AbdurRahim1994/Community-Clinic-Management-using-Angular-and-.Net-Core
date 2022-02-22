import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Category } from '../../../models/Category/category';
import { MedicineStock } from '../../../models/Medicine-Stock/medicine-stock';
import { CategoryService } from '../../../services/Category/category.service';
import { MedicineStockService } from '../../../services/Medicine-Stock/medicine-stock.service';
import { SnackNotifyService } from '../../../services/SnackBar/snack-notify.service';

@Component({
  selector: 'app-medicine-stock-create',
  templateUrl: './medicine-stock-create.component.html',
  styleUrls: ['./medicine-stock-create.component.css']
})
export class MedicineStockCreateComponent implements OnInit {
  suspension!: string;
  mg_ml: string[] = ["MG", "ML"]

  availability!: string;
  yes_no: string[] = ["Yes", "No"]

  medicineStock: MedicineStock = new MedicineStock();
  categories: Category[] = [];
  medicineStockForm: FormGroup = new FormGroup({
    medicineName: new FormControl('', Validators.required),
    weightContaints: new FormControl('', Validators.required),
    mG_ML: new FormControl('MG', Validators.required),
    quantity: new FormControl('',Validators.required),
    available: new FormControl('Yes', Validators.required),
    categoryId: new FormControl('',Validators.required)
  });

  get f() {
    return this.medicineStockForm.controls;
  }

  insert() {
    if (this.medicineStockForm.invalid) return;

    this.medicineStock.medicineName = this.f.medicineName.value;
    this.medicineStock.weightContaints = this.f.weightContaints.value;
    this.medicineStock.mG_ML = this.f.mG_ML.value;
    this.medicineStock.quantity = Number(this.f.quantity.value);
    this.medicineStock.available = this.f.available.value;
    this.medicineStock.categoryId = this.f.categoryId.value;

    this.medicineStockSvc.insertMedicineStock(this.medicineStock).subscribe(ms => {
      this.snackNotifySvc.success("Data Inserted Successfully", "OK");
      this.medicineStockForm.reset({});
    }, err => {
      this.snackNotifySvc.fail("Oops ! Data Insert Failed", "DISMISS");
    })
  }

  constructor(private medicineStockSvc: MedicineStockService, private snackNotifySvc: SnackNotifyService, private dialog: MatDialog, private categorySvc: CategoryService) { }

  ngOnInit(): void {
    this.categorySvc.getCategory().subscribe(c => {
      this.categories = c;
    }, err => {
      this.snackNotifySvc.fail("Data loading failed", "DISMISS");
    })

  }

}
