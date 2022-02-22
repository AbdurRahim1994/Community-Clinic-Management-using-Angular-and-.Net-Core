import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { retry } from 'rxjs/operators';
import { Medicine } from '../../../models/Medicine/medicine';
import { MedicineService } from '../../../services/Medicine/medicine.service';
import { SnackNotifyService } from '../../../services/SnackBar/snack-notify.service';

@Component({
  selector: 'app-medicine-create',
  templateUrl: './medicine-create.component.html',
  styleUrls: ['./medicine-create.component.css']
})
export class MedicineCreateComponent implements OnInit {
  suspension!: string;
  mg_ml: string[] = ["MG", "ML"]

  availability!: string;
  yes_no: string[]=["Yes","No"]
  medicine: Medicine = new Medicine();
  medicineForm: FormGroup = new FormGroup({
    medicineName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    weightContaints: new FormControl('', Validators.required),
    mG_ML: new FormControl('MG', Validators.required),
    quantity: new FormControl(Number(Validators.required)),
    available: new FormControl('Yes', Validators.required)
  });

  get f() {
    return this.medicineForm.controls;
  }

  insert() {
    if (this.medicineForm.invalid) return;
    this.medicine.medicineName = this.f.medicineName.value;
    this.medicine.weightContaints = this.f.weightContaints.value;
    this.medicine.mG_ML = this.f.mG_ML.value;
    this.medicine.quantity = Number(this.f.quantity.value);
    this.medicine.available = this.f.available.value;
    this.medicineSvc.insertMedicine(this.medicine).subscribe(m => {
      this.snackNotifySvc.success("Data Inserted Successfully", "OK");
      this.medicineForm.reset({});
    }, err => {
      this.snackNotifySvc.fail("Oops! Data Insert Failed", "DISMISS");
    })
  }
  constructor(private medicineSvc: MedicineService, private snackNotifySvc: SnackNotifyService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
