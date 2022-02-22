import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../../../models/Doctor/doctor';
import { PhysicalCheckUp } from '../../../models/Physical-CheckUp/physical-check-up';
import { Service } from '../../../models/Service/service';
import { DoctorService } from '../../../services/Doctor/doctor.service';
import { PhysicalCheckUpService } from '../../../services/Physical-CheckUp/physical-check-up.service';
import { ServiceService } from '../../../services/Service/service.service';
import { SnackNotifyService } from '../../../services/SnackBar/snack-notify.service';

@Component({
  selector: 'app-physical-check-up-edit',
  templateUrl: './physical-check-up-edit.component.html',
  styleUrls: ['./physical-check-up-edit.component.css']
})
export class PhysicalCheckUpEditComponent implements OnInit {
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

  update() {
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

    this.physicalCheckUpSvc.updatePhysicalCheckUp(this.physicalCheckUp).subscribe(phc => {
      this.snackNotifySvc.success("Data Updated Successfully", "OK");
    }, err => {
      this.snackNotifySvc.fail("Oops ! Data Update Failed", "DISMISS");
    })
  }

  constructor(
    private physicalCheckUpSvc: PhysicalCheckUpService,
    private snackNotifySvc: SnackNotifyService,
    private doctorSvc: DoctorService,
    private serviceSvc: ServiceService,
    private dialog: MatDialog,
    private datePipe: DatePipe,
    private activatedRoute: ActivatedRoute) { }

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
    });

    let id: number = this.activatedRoute.snapshot.params.id;
    this.physicalCheckUpSvc.getPhysicalCheckUpById(id).subscribe(phc => {
      this.physicalCheckUp = phc;
      this.physicalCheckUpForm.patchValue(this.physicalCheckUp);
    }, err => {
      this.snackNotifySvc.fail("Physical Check Up Data loading failed", "DISMISS");
    })
  }

}
