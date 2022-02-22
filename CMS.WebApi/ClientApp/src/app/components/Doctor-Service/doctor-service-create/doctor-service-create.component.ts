import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ServiceDoctor } from '../../../models/Doctor-Service/doctor-service';
import { Doctor } from '../../../models/Doctor/doctor';
import { Service } from '../../../models/Service/service';
import { DoctorServiceService } from '../../../services/Doctor-Service/doctor-service.service';
import { DoctorService } from '../../../services/Doctor/doctor.service';
import { ServiceService } from '../../../services/Service/service.service';
import { SnackNotifyService } from '../../../services/SnackBar/snack-notify.service';

@Component({
  selector: 'app-doctor-service-create',
  templateUrl: './doctor-service-create.component.html',
  styleUrls: ['./doctor-service-create.component.css']
})
export class DoctorServiceCreateComponent implements OnInit {
  doctorService: ServiceDoctor = new ServiceDoctor();
  doctors: Doctor[] = [];
  services: Service[] = [];

  doctorServiceForm: FormGroup = new FormGroup({
    doctorId: new FormControl('', Validators.required),
    serviceId: new FormControl('', Validators.required)
  })

  get f() {
    return this.doctorServiceForm.controls;
  }

  insert() {
    if (this.doctorServiceForm.invalid) return;

    this.doctorService.doctorId = this.f.doctorId.value;
    this.doctorService.serviceId = this.f.serviceId.value;

    this.doctorServiceSvc.insertDoctorService(this.doctorService).subscribe(ds => {
      this.snackNotifySvc.success("Data Inserted Successfully", "OK");
    }, err => {
      this.snackNotifySvc.fail("You can create one doctor for one service only", "DISMISS");
    })
  }

  constructor(
    private doctorServiceSvc: DoctorServiceService,
    private snackNotifySvc: SnackNotifyService,
    private doctorSvc: DoctorService,
    private serviceSvc: ServiceService) { }

  ngOnInit(): void {
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

}
