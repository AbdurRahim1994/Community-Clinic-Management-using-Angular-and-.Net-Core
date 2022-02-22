import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Doctor } from '../../../models/Doctor/doctor';
import { Patient } from '../../../models/Patient/patient';
import { Service } from '../../../models/Service/service';
import { DoctorService } from '../../../services/Doctor/doctor.service';
import { PatientService } from '../../../services/Patient/patient.service';
import { ServiceService } from '../../../services/Service/service.service';
import { SnackNotifyService } from '../../../services/SnackBar/snack-notify.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css']
})
export class PatientViewComponent implements OnInit {
  patients: Patient[] = [];
  services: Service[] = [];
  doctors: Doctor[] = [];
  dataSource: MatTableDataSource<Patient> = new MatTableDataSource(this.patients);
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  columnList: string[] = ["name", "address", "age", "checkUpDate", "observation", "service", "doctor", "actions"];
  constructor(private patientSvc: PatientService, private snackNotifySvc: SnackNotifyService, private dialog: MatDialog, private serviceSvc: ServiceService, private doctorSvc: DoctorService) { }

  ngOnInit(): void {
    this.patientSvc.getPatient().subscribe(p => {
      this.patients = p;
      console.log(p);
      this.dataSource.data = this.patients;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, err => {
      this.snackNotifySvc.fail("Data loading failed", "DISMISS");
    });

    this.serviceSvc.getService().subscribe(s => {
      this.services = s;
      console.log(s);
    }, err => {
      this.snackNotifySvc.fail("Service Data loading failed", "DISMISS");
    })

    this.doctorSvc.getDoctor().subscribe(d => {
      this.doctors = d;
      console.log(d);
    }, err => {
      this.snackNotifySvc.fail("Doctor Data loading failed", "DISMISS");
    })
  }

  confirmDelete(data: Patient) {
    this.dialog.open(ConfirmDialogComponent, {
      width: '450px'
    }).afterClosed().subscribe(x => {
      if (x) this.patientSvc.deletePatient(Number(data.patientId)).subscribe(x => {
        this.snackNotifySvc.success("Data Successfully Deleted !!", "OK");
        this.dataSource.data = this.dataSource.data.filter(d => d.patientId != x.patientId);
      }, err => {
        this.snackNotifySvc.fail("Oops! Data delete failed", "DISMISS");
      })
    })
  }

  getServiceName(id: number) {
    let x = this.services.find(x => x.serviceId = id);
    return x ? x.serviceName : '';
  }

  getDoctorName(id: number) {
    let x = this.doctors.find(x => x.doctorId = id);
    return x ? x.doctorName : '';
  }

}
