import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Doctor } from '../../../models/Doctor/doctor';
import { FollowUp } from '../../../models/Follow-Up/follow-up';
import { PhysicalCheckUp } from '../../../models/Physical-CheckUp/physical-check-up';
import { DoctorService } from '../../../services/Doctor/doctor.service';
import { FollowUpService } from '../../../services/Follow-Up/follow-up.service';
import { PhysicalCheckUpService } from '../../../services/Physical-CheckUp/physical-check-up.service';
import { SnackNotifyService } from '../../../services/SnackBar/snack-notify.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-follow-up-view',
  templateUrl: './follow-up-view.component.html',
  styleUrls: ['./follow-up-view.component.css']
})
export class FollowUpViewComponent implements OnInit {
  followUps: FollowUp[] = [];
  physicalCheckUps: PhysicalCheckUp[] = [];
  doctors: Doctor[] = [];

  dataSource: MatTableDataSource<FollowUp> = new MatTableDataSource(this.followUps);
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  columnList: string[] = ["physicalCheckUp", "followUpDate", "checkUpDate", "testGiven", "previousMedicine", "testResult", "observation", "updatedMedicine", "advice","actions"];
  constructor(
    private followUpSvc: FollowUpService,
    private snackNotifySvc: SnackNotifyService,
    private dialog: MatDialog,
    private physicalCheckSvc: PhysicalCheckUpService,
    private doctorSvc: DoctorService) { }

  ngOnInit(): void {
    this.followUpSvc.getFollowUp().subscribe(f => {
      this.followUps = f;
      console.log(f);
      this.dataSource.data = this.followUps;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, err => {
      this.snackNotifySvc.fail("Follow Up Data loading failed", "DISMISS");
    });

    this.physicalCheckSvc.getPhysicalCheckUp().subscribe(phc => {
      this.physicalCheckUps = phc;
    }, err => {
      this.snackNotifySvc.fail("Patient Data loading failed", "DISMISS");
    });

    this.doctorSvc.getDoctor().subscribe(d => {
      this.doctors = d;
    }, err => {
      this.snackNotifySvc.fail("Doctor Data loading failed", "DISMISS");
    })
  }

  getPaitentName(id: number) {
    let p = this.physicalCheckUps.find(p => p.physicalCheckUpId = id);
    return p ? p.patientName : '';
  }

  confirmDelete(data: FollowUp) {
    this.dialog.open(ConfirmDialogComponent, {
      width: '450px'
    }).afterClosed().subscribe(x => {
      if (x) this.followUpSvc.deleteFollowUp(Number(data.followUpId)).subscribe(x => {
        this.snackNotifySvc.success("Data Successfully Deleted !!", "OK");
        this.dataSource.data = this.dataSource.data.filter(d => d.followUpId != x.followUpId);
      }, err => {
        this.snackNotifySvc.fail("Oops! Data delete failed", "DISMISS");
      })
    })
  }

}
