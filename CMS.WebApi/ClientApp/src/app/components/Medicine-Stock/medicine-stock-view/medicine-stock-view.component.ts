import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from '../../../models/Category/category';
import { MedicineStock } from '../../../models/Medicine-Stock/medicine-stock';
import { CategoryService } from '../../../services/Category/category.service';
import { MedicineStockService } from '../../../services/Medicine-Stock/medicine-stock.service';
import { SnackNotifyService } from '../../../services/SnackBar/snack-notify.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-medicine-stock-view',
  templateUrl: './medicine-stock-view.component.html',
  styleUrls: ['./medicine-stock-view.component.css']
})
export class MedicineStockViewComponent implements OnInit {
  medicineStocks: MedicineStock[] = [];
  categories: Category[] = [];
  dataSource: MatTableDataSource<MedicineStock> = new MatTableDataSource(this.medicineStocks);
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  columnList: string[] = ["name", "weightContaints", "mG_ML", "quantity", "available", "category", "actions"];
  constructor(private medicineStockSvc: MedicineStockService, private snackNotifySvc: SnackNotifyService, private dialog: MatDialog, private categorySvc: CategoryService) { }

  ngOnInit(): void {
    this.medicineStockSvc.getMedicineStock().subscribe(ms => {
      this.medicineStocks = ms;
      console.log(ms);
      this.dataSource.data = this.medicineStocks;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, err => {
      this.snackNotifySvc.fail("Data loading failed", "DISMISS");
    });

    this.categorySvc.getCategory().subscribe(x => {
      this.categories = x;
    }, err => {
      this.snackNotifySvc.fail("Data loading failed", "DISMISS");
    })
  }

  getCategoryName(id: number) {
    let x = this.categories.find(x => x.categoryId == id);
    return x ? x.categoryName : '';
  }

  confirmDelete(data: MedicineStock) {
    this.dialog.open(ConfirmDialogComponent, {
      width: '450px'
    }).afterClosed().subscribe(x => {
      if (x) this.medicineStockSvc.deleteMedicineStock(Number(data.medicineStockId)).subscribe(x => {
        this.snackNotifySvc.success("Data Successfully Deleted !!", "OK");
        this.dataSource.data = this.dataSource.data.filter(d => d.medicineStockId != x.medicineStockId);
      }, err => {
        this.snackNotifySvc.fail("Oops! Data delete failed", "DISMISS");
      })
    })
  }

}
