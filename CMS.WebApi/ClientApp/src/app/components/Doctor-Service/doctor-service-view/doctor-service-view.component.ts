import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceDoctor } from '../../../models/Doctor-Service/doctor-service';
import { Doctor } from '../../../models/Doctor/doctor';
import { Service } from '../../../models/Service/service';
import { DoctorServiceService } from '../../../services/Doctor-Service/doctor-service.service';
import { DoctorService } from '../../../services/Doctor/doctor.service';
import { ServiceService } from '../../../services/Service/service.service';
import { SnackNotifyService } from '../../../services/SnackBar/snack-notify.service';

@Component({
  selector: 'app-doctor-service-view',
  templateUrl: './doctor-service-view.component.html',
  styleUrls: ['./doctor-service-view.component.css']
})
export class DoctorServiceViewComponent implements OnInit {
  doctorServices: ServiceDoctor[] = [];
  doctors: Doctor[] = [];
  services: Service[] = [];

  dataSource: MatTableDataSource<ServiceDoctor> = new MatTableDataSource(this.doctorServices);
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  columnList: string[] = ["doctor", "service", "actions"];
  doctorName!: string;

  constructor(
    private doctorServiceSvc: DoctorServiceService,
    private snackNotifySvc: SnackNotifyService,
    private doctorSvc: DoctorService,
    private serviceSvc: ServiceService) { }

  ngOnInit(): void {
    this.doctorServiceSvc.getDoctorService().subscribe(ds => {
      this.doctorServices = ds;
      console.log(ds);
      this.dataSource.data = this.doctorServices;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, err => {
      this.snackNotifySvc.fail("Doctor Service Data loading failed", "DISMISS");
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
    });

    this.dataSource.filterPredicate = (data, filter) => {
      return this.columnList.some(ele => {
        return ele != 'actions' && this.doctorName.toLowerCase().indexOf(filter) != -1;
      });
    };
  }

  getDoctorName(id: number) {
    let d = this.doctors.find(d => d.doctorId = id);
    return d ? d.doctorName : '';
  }

  getServiceName(id: number) {
    let s = this.services.find(s => s.serviceId = id);
    return s ? s.serviceName : '';
  }

  onSearchClear() {
    this.doctorName = "";
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.doctorName.trim().toLowerCase();
  }

}
