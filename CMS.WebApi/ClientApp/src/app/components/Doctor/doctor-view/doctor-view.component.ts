import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Designation } from '../../../models/Designation/designation';
import { Doctor } from '../../../models/Doctor/doctor';
import { DesignationService } from '../../../services/Designation/designation.service';
import { DoctorService } from '../../../services/Doctor/doctor.service';
import { SnackNotifyService } from '../../../services/SnackBar/snack-notify.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.css']
})
export class DoctorViewComponent implements OnInit {
  doctors: Doctor[] = [];
  designations: Designation[] = [];
  dataSource: MatTableDataSource<Doctor> = new MatTableDataSource(this.doctors);
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  columnList: string[] = ["name", "address", "contact", "appointed", "designation", "degree", "specialization", "picture","actions"];

  constructor(private doctorSvc: DoctorService, private snackNotifySvc: SnackNotifyService, private designationSvc: DesignationService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.doctorSvc.getDoctor().subscribe(d => {
      this.doctors = d;
      console.log(d);
      this.dataSource.data = this.doctors;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, err => {
      this.snackNotifySvc.fail("Doctor Data loading failed", "DISMISS");
    })

    this.designationSvc.getDesignation().subscribe(de => {
      this.designations = de;
      console.log(de);
    }, err => {
      this.snackNotifySvc.fail("Designation Data loading failed", "DISMISS");
    })
  }

  getDesignationName(id: number) {
    let d = this.designations.find(d => d.designationId = id);
    return d ? d.positionName : '';
  }

  confirmDelete(data: Doctor) {
    this.dialog.open(ConfirmDialogComponent, {
      width: '450px'
    }).afterClosed().subscribe(d => {
      if (d) this.doctorSvc.deleteDoctor(Number(data.doctorId)).subscribe(d => {
        this.snackNotifySvc.success("Data Deleted Successfully", "OK");
        this.dataSource.data = this.dataSource.data.filter(x => x.doctorId != d.doctorId);
      }, err => {
        this.snackNotifySvc.fail("Oops ! failed to delete", "DISMISS");
      })
    })
  }

}
