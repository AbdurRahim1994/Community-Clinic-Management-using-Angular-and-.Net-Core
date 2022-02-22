import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Service } from '../../../models/Service/service';
import { ServiceService } from '../../../services/Service/service.service';
import { SnackNotifyService } from '../../../services/SnackBar/snack-notify.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-service-view',
  templateUrl: './service-view.component.html',
  styleUrls: ['./service-view.component.css']
})
export class ServiceViewComponent implements OnInit {
  services: Service[] = [];
  dataSource: MatTableDataSource<Service> = new MatTableDataSource(this.services);
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  columnList: string[] = ["name", "symptoms", "treatmentProcedure", "preferedMedicines","actions"];
  constructor(private serviceSvc: ServiceService, private snackNotifySvc: SnackNotifyService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.serviceSvc.getService().subscribe(s => {
      this.services = s;
      console.log(s);
      this.dataSource.data = this.services;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, err => {
      this.snackNotifySvc.fail("Data loading failed", "DISMISS");
    })
  }

  confirmDelete(data: Service) {
    this.dialog.open(ConfirmDialogComponent, {
      width: '450px'
    }).afterClosed().subscribe(x => {
      if (x) this.serviceSvc.deleteService(Number(data.serviceId)).subscribe(x => {
        this.snackNotifySvc.success("Data Successfully Deleted !!", "OK");
        this.dataSource.data = this.dataSource.data.filter(d => d.serviceId != x.serviceId);
      }, err => {
        this.snackNotifySvc.fail("Oops! Data delete failed", "DISMISS");
      })
    })
  }

}
