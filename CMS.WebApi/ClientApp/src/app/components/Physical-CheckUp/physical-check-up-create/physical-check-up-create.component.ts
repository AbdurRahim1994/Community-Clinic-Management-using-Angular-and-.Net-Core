import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Doctor } from '../../../models/Doctor/doctor';
import { PhysicalCheckUp } from '../../../models/Physical-CheckUp/physical-check-up';
import { Service } from '../../../models/Service/service';
import { DoctorService } from '../../../services/Doctor/doctor.service';
import { PhysicalCheckUpService } from '../../../services/Physical-CheckUp/physical-check-up.service';
import { ServiceService } from '../../../services/Service/service.service';
import { SnackNotifyService } from '../../../services/SnackBar/snack-notify.service';

@Component({
  selector: 'app-physical-check-up-create',
  templateUrl: './physical-check-up-create.component.html',
  styleUrls: ['./physical-check-up-create.component.css']
})
export class PhysicalCheckUpCreateComponent implements OnInit {
  physicalCheckUp: PhysicalCheckUp = new PhysicalCheckUp();
  doctors: Doctor[] = [];
  services: Service[] = [];

  physicalCheckUpForm: FormGroup = new FormGroup({
    patientName: new FormControl('', Validators.required),
    patientAddress: new FormControl('', Validators.required),
    checkUpDate: new FormControl(undefined, Validators.required),
    doctorId: new FormControl(undefined, Validators.required),
    serviceId: new FormControl(undefined, Validators.required),
    pressure: new FormControl(undefined, Validators.required),
    heartBeat: new FormControl(undefined, Validators.required),
    weight: new FormControl(undefined, Validators.required),
    observation: new FormControl(undefined, Validators.required),
    testGiven: new FormControl(undefined, Validators.required),
    medicine: new FormControl(undefined, Validators.required),
    advice: new FormControl(undefined, Validators.required)
  })

  get f() {
    return this.physicalCheckUpForm.controls;
  }

  insert() {
    if (this.physicalCheckUpForm.invalid) return;

    this.physicalCheckUp.patientName = this.f.patientName.value;
    this.physicalCheckUp.patientAddress = this.f.patientAddress.value;
    this.physicalCheckUp.checkUpDate = this.f.checkUpDate.value;
    this.physicalCheckUp.checkUpDate = new Date(<string>this.datePipe.transform(this.physicalCheckUp.checkUpDate, "MMM dd yyyy"));
    this.physicalCheckUp.doctorId = this.f.doctorId.value;
    this.physicalCheckUp.serviceId = this.f.serviceId.value;
    this.physicalCheckUp.pressure = this.f.pressure.value;
    this.physicalCheckUp.heartBeat = this.f.heartBeat.value;
    this.physicalCheckUp.weight = this.f.weight.value;
    this.physicalCheckUp.observation = this.f.observation.value;
    this.physicalCheckUp.testGiven = this.f.testGiven.value;
    this.physicalCheckUp.medicine = this.f.medicine.value;
    this.physicalCheckUp.advice = this.f.advice.value;

    this.physicalCheckUpSvc.insertPhysicalCheckUp(this.physicalCheckUp).subscribe(phc => {
      this.snackNotifySvc.success("Data Inserted Successfully", "OK");
    }, err => {
      this.snackNotifySvc.fail("Oops ! Data Insert Failed", "DISMISS");
    })
  }

  constructor(
    private physicalCheckUpSvc: PhysicalCheckUpService,
    private snackNotifySvc: SnackNotifyService,
    private doctorSvc: DoctorService,
    private serviceSvc: ServiceService,
    private dialog: MatDialog,
    private datePipe: DatePipe) { }

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
