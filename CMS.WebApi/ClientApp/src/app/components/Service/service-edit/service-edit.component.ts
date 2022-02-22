import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../../../models/Service/service';
import { ServiceService } from '../../../services/Service/service.service';
import { SnackNotifyService } from '../../../services/SnackBar/snack-notify.service';

@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.component.html',
  styleUrls: ['./service-edit.component.css']
})
export class ServiceEditComponent implements OnInit {
  service: Service = new Service();
  serviceForm: FormGroup = new FormGroup({
    serviceName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    symptoms: new FormControl('', Validators.required),
    treatmentProcedure: new FormControl('', Validators.required),
    preferedMedicines: new FormControl('', Validators.required)
  });

  get f() {
    return this.serviceForm.controls;
  }

  update() {
    if (this.serviceForm.invalid) return;
    this.service.serviceName = this.f.serviceName.value;
    this.service.symptoms = this.f.symptoms.value;
    this.service.treatmentProcedure = this.f.treatmentProcedure.value;
    this.service.preferedMedicines = this.f.preferedMedicines.value;
    this.serviceSvc.updateService(this.service).subscribe(m => {
      this.snackNotifySvc.success("Data Updated Successfully", "OK");
      this.serviceForm.reset({});
    }, err => {
      this.snackNotifySvc.fail("Oops! Data Updated Failed", "DISMISS");
    })
  }

  constructor(private serviceSvc: ServiceService, private snackNotifySvc: SnackNotifyService, private dialog: MatDialog, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id: number = this.activatedRoute.snapshot.params.id;
    this.serviceSvc.getServiceById(id).subscribe(m => {
      this.service = m;
      this.serviceForm.patchValue(this.service);
    }, err => {
      this.snackNotifySvc.fail("Data loading failed", "DISMISS");
    })
  }

}
