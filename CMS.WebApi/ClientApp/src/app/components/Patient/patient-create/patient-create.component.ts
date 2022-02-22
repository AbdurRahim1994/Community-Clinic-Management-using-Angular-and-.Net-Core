import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Doctor } from '../../../models/Doctor/doctor';
import { Patient } from '../../../models/Patient/patient';
import { Service } from '../../../models/Service/service';
import { DoctorService } from '../../../services/Doctor/doctor.service';
import { PatientService } from '../../../services/Patient/patient.service';
import { ServiceService } from '../../../services/Service/service.service';
import { SnackNotifyService } from '../../../services/SnackBar/snack-notify.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {
  patient: Patient = new Patient();
  services: Service[] = [];
  doctors: Doctor[] = [];

  patientForm: FormGroup = new FormGroup({
    patientName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    checkUpDate: new FormControl(undefined, Validators.required),
    observation: new FormControl('', Validators.required),
    serviceId: new FormControl('', Validators.required),
    doctorId: new FormControl('', Validators.required)
  });

  get f() {
    return this.patientForm.controls;
  }

  insert() {
    if (this.patientForm.invalid) return;

    this.patient.patientName = this.f.patientName.value;
    this.patient.address = this.f.address.value;
    this.patient.age = this.f.age.value;
    this.patient.checkUpDate = this.f.checkUpDate.value;
    this.patient.checkUpDate = new Date(<string>this.datePipe.transform(this.patient.checkUpDate, "MMM dd yyyy"));
    this.patient.observation = this.f.observation.value;
    this.patient.serviceId = this.f.serviceId.value;
    this.patient.doctorId = this.f.doctorId.value;

    this.patientSvc.insertPatient(this.patient).subscribe(p => {
      this.snackNotifySvc.success("Data Inserted Successfully", "OK");
      this.patientForm.reset({});
      console.log(p)
    }, err => {
      this.snackNotifySvc.fail("Oops! Data Insert Failed", "DISMISS");
    })
  }
  constructor(private patientSvc: PatientService, private serviceSvc: ServiceService, private snackNotifySvc: SnackNotifyService, private doctorSvc: DoctorService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.serviceSvc.getService().subscribe(s => {
      this.services = s;
    }, err => {
      this.snackNotifySvc.fail("Service Data loading failed", "DISMISS");
    })

    this.doctorSvc.getDoctor().subscribe(d => {
      this.doctors = d;
    }, err => {
      this.snackNotifySvc.fail("Doctor Data loading failed", "DISMISS");
    })
  }

}
