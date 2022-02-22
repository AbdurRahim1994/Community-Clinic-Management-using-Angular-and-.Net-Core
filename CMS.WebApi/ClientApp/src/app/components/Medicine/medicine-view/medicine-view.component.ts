import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Medicine } from '../../../models/Medicine/medicine';
import { MedicineService } from '../../../services/Medicine/medicine.service';
import { SnackNotifyService } from '../../../services/SnackBar/snack-notify.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-medicine-view',
  templateUrl: './medicine-view.component.html',
  styleUrls: ['./medicine-view.component.css']
})
export class MedicineViewComponent implements OnInit {
  medicines: Medicine[] = [];
  dataSource: MatTableDataSource<Medicine> = new MatTableDataSource(this.medicines);
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  columnList: string[] = ["name", "weightContaints", "MG_ML", "quantity", "available", "actions"];
  constructor(private medicineSvc: MedicineService, private snackNotifySvc: SnackNotifyService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.medicineSvc.getMedicine().subscribe(m => {
      this.medicines = m;
      console.log(m);
      this.dataSource.data = this.medicines;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, err => {
      this.snackNotifySvc.fail("Data loading failed !!", "DISMISS");
    })
  }

  confirmDelete(data: Medicine) {
    this.dialog.open(ConfirmDialogComponent, {
      width: '450px'
    }).afterClosed().subscribe(x => {
      if (x) this.medicineSvc.deleteMedicine(Number(data.medicineId)).subscribe(x => {
        this.snackNotifySvc.success("Data Successfully Deleted !!", "OK");
        this.dataSource.data = this.dataSource.data.filter(d => d.medicineId != x.medicineId);
      }, err => {
        this.snackNotifySvc.fail("Oops! Data delete failed", "DISMISS");
      })
    })
  }

}
