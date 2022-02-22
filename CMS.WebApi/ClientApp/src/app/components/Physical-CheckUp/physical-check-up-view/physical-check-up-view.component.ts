import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Doctor } from '../../../models/Doctor/doctor';
import { PhysicalCheckUp } from '../../../models/Physical-CheckUp/physical-check-up';
import { Service } from '../../../models/Service/service';
import { DoctorService } from '../../../services/Doctor/doctor.service';
import { PhysicalCheckUpService } from '../../../services/Physical-CheckUp/physical-check-up.service';
import { ServiceService } from '../../../services/Service/service.service';
import { SnackNotifyService } from '../../../services/SnackBar/snack-notify.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-physical-check-up-view',
  templateUrl: './physical-check-up-view.component.html',
  styleUrls: ['./physical-check-up-view.component.css']
})
export class PhysicalCheckUpViewComponent implements OnInit {
  physicalCheckUps: PhysicalCheckUp[] = [];
  doctors: Doctor[] = [];
  services: Service[] = [];
  dataSource: MatTableDataSource<PhysicalCheckUp> = new MatTableDataSource(this.physicalCheckUps);
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  columnList: string[] = ["name", "date", "doctor", "service", "pressure", "heartbeat", "weight", "observation", "test", "medicine", "advice", "actions"];

  constructor(
    private physicalCheckUpSvc: PhysicalCheckUpService,
    private snackNotifySvc: SnackNotifyService,
    private dialog: MatDialog,
    private doctorSvc: DoctorService,
    private serviceSvc: ServiceService) { }

  ngOnInit(): void {
    this.physicalCheckUpSvc.getPhysicalCheckUp().subscribe(pc => {
      this.physicalCheckUps = pc;
      console.log(pc);
      this.dataSource.data = this.physicalCheckUps;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, err => {
      this.snackNotifySvc.fail("Data loading failed", "DISMISS");
    });

    this.doctorSvc.getDoctor().subscribe(d => {
      this.doctors = d;
    }, err => {
      this.snackNotifySvc.fail("Doctor Data loading failed", "DISMISS");
    });

    this.serviceSvc.getService().subscribe(s => {
      this.services = s;
    }, err => {
      this.snackNotifySvc.fail("Service Data loading failed", "DISMISS");
    })
  }

  getDoctorName(id: number) {
    let d = this.doctors.find(d => d.doctorId = id);
    return d ? d.doctorName : '';
  }

  getServiceName(id: number) {
    let s = this.services.find(s => s.serviceId = id);
    return s ? s.serviceName : '';
  }

  confirmDelete(data: PhysicalCheckUp) {
    this.dialog.open(ConfirmDialogComponent, {
      width: '450px'
    }).afterClosed().subscribe(phc => {
      if (phc) this.physicalCheckUpSvc.deletePhysicalCheckUp(Number(data.physicalCheckUpId)).subscribe(phc => {
        this.snackNotifySvc.success("Data Deleted Successfully", "OK");
        this.dataSource.data = this.dataSource.data.filter(x => x.physicalCheckUpId != phc.physicalCheckUpId);
      }, err => {
        this.snackNotifySvc.fail("Oops ! Delete Failed", "DISMISS");
      })
    })
  }

}
