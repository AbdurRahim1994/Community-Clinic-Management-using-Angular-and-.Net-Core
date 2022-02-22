import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../../models/Category/category';
import { MedicineStock } from '../../../models/Medicine-Stock/medicine-stock';
import { CategoryService } from '../../../services/Category/category.service';
import { MedicineStockService } from '../../../services/Medicine-Stock/medicine-stock.service';
import { SnackNotifyService } from '../../../services/SnackBar/snack-notify.service';

@Component({
  selector: 'app-medicine-stock-edit',
  templateUrl: './medicine-stock-edit.component.html',
  styleUrls: ['./medicine-stock-edit.component.css']
})
export class MedicineStockEditComponent implements OnInit {
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
    quantity: new FormControl('', Validators.required),
    available: new FormControl('Yes', Validators.required),
    categoryId: new FormControl('', Validators.required)
  });

  get f() {
    return this.medicineStockForm.controls;
  }

  update() {
    if (this.medicineStockForm.invalid) return;

    this.medicineStock.medicineName = this.f.medicineName.value;
    this.medicineStock.weightContaints = this.f.weightContaints.value;
    this.medicineStock.mG_ML = this.f.mG_ML.value;
    this.medicineStock.quantity = Number(this.f.quantity.value);
    this.medicineStock.available = this.f.available.value;
    this.medicineStock.categoryId = this.f.categoryId.value;

    this.medicineStockSvc.updateMedicineStock(this.medicineStock).subscribe(ms => {
      this.snackNotifySvc.success("Data Updated Successfully", "OK");
      this.medicineStockForm.reset({});
    }, err => {
      this.snackNotifySvc.fail("Oops ! Data Update Failed", "DISMISS");
    })
  }

  constructor(private medicineStockSvc: MedicineStockService, private snackNotifySvc: SnackNotifyService, private dialog: MatDialog, private activatedRoute: ActivatedRoute, private categorySvc: CategoryService) { }

  ngOnInit(): void {
    this.categorySvc.getCategory().subscribe(c => {
      this.categories = c;
    }, err => {
      this.snackNotifySvc.fail("Category Data loading failed", "DISMISS");
    })

    let id: number = this.activatedRoute.snapshot.params.id;
    this.medicineStockSvc.getMedicineStockById(id).subscribe(ms => {
      this.medicineStock = ms;
      this.medicineStockForm.patchValue(this.medicineStock);
    }, err => {
      this.snackNotifySvc.fail("MedicineStock Data loading failed ", "DISMISS");
    })
  }

}
