import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Designation } from '../../../models/Designation/designation';
import { Doctor } from '../../../models/Doctor/doctor';
import { DesignationService } from '../../../services/Designation/designation.service';
import { DoctorService } from '../../../services/Doctor/doctor.service';
import { SnackNotifyService } from '../../../services/SnackBar/snack-notify.service';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit {
  picFile!: File;
  doctor!: Doctor;
  designations: Designation[] = [];

  doctorForm: FormGroup = new FormGroup({
    doctorName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    appointed: new FormControl(undefined, Validators.required),
    designationId: new FormControl('', Validators.required),
    degree: new FormControl('', Validators.required),
    specialization: new FormControl('', Validators.required),
    picture: new FormControl(undefined, Validators.required)
  });

  get f() {
    return this.doctorForm.controls;
  }

  update() {
    if (this.doctorForm.invalid) return;

    this.doctor.doctorName = this.f.doctorName.value;
    this.doctor.address = this.f.address.value;
    this.doctor.contact = this.f.contact.value;
    this.doctor.email = this.f.email.value;
    this.doctor.appointed = this.f.appointed.value;
    this.doctor.appointed = new Date(<string>this.datePipe.transform(this.doctor.appointed, "MMM dd yyyy"));
    this.doctor.designationId = this.f.designationId.value;
    this.doctor.degree = this.f.degree.value;
    this.doctor.specialization = this.f.specialization.value;

    this.doctorSvc.updateDoctor(this.doctor).subscribe(d => {
      if (this.picFile != null && this.doctor.doctorId) {
        this.upload(Number(this.doctor.doctorId))
      }
      else {
        this.snackNotifySvc.fail("Data Updated Successfully", "OK");
      }
    }, err => {
      this.snackNotifySvc.fail("Oops ! Data Update Failed", "DISMISS");
    })
  }

  upload(id: number) {
    let reader = new FileReader();
    reader.addEventListener("load", (event: any) => {
      this.doctorSvc.upload(id, this.picFile).subscribe(r => {
        this.doctor.picture = r.imagePath;
        this.snackNotifySvc.success("Data Updated Successfully", "OK");
        this.doctorForm.reset({});
      }, err => {
        this.snackNotifySvc.fail("Image loading failed", "DISMISS");
      })
    })
    reader.readAsDataURL(this.picFile);
  }

  onChange(event: any) {
    this.picFile = event.target.files[0];
  }

  constructor(
    private doctorSvc: DoctorService,
    private snackNotifySvc: SnackNotifyService,
    private designationSvc: DesignationService,
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.designationSvc.getDesignation().subscribe(de => {
      this.designations = de;
      console.log(de);
    }, err => {
      this.snackNotifySvc.fail("Designation Data loading failed", "DISMISS");
    })

    let id: number = this.activatedRoute.snapshot.params.id;
    this.doctorSvc.getDoctorById(id).subscribe(d => {
      this.doctor = d;
      this.doctorForm.patchValue(this.doctor);
    }, err => {
      this.snackNotifySvc.fail("Doctor Data loading failed", "DISMISS");
    })
  }

}
