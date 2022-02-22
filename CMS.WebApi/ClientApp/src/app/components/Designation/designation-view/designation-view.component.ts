import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Designation } from '../../../models/Designation/designation';
import { DesignationService } from '../../../services/Designation/designation.service';
import { SnackNotifyService } from '../../../services/SnackBar/snack-notify.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-designation-view',
  templateUrl: './designation-view.component.html',
  styleUrls: ['./designation-view.component.css']
})
export class DesignationViewComponent implements OnInit {
  designations: Designation[] = [];
  dataSource: MatTableDataSource<Designation> = new MatTableDataSource(this.designations);
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  columnList: string[] = ["id","positionName", "actions"];
  constructor(private designationSvc: DesignationService, private notifySvc: SnackNotifyService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.designationSvc.getDesignation().subscribe(d => {
      this.designations = d;
      console.log(d);
      this.dataSource.data = this.designations;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, err => {
      this.notifySvc.fail("Data loading failed", "DISMISS");
    })
  }

  confirmDelete(data: Designation) {
    this.dialog.open(ConfirmDialogComponent, {
      width: '450px'
    }).afterClosed().subscribe(x => {
      if (x) this.designationSvc.deleteDesignation(Number(data.designationId)).subscribe(x => {
        this.notifySvc.success("Data Successfully Deleted !!", "OK");
        this.dataSource.data = this.dataSource.data.filter(d => d.designationId != x.designationId);
      }, err => {
        this.notifySvc.fail("Oops! Data delete failed", "DISMISS");
      })
    })
  }

}
