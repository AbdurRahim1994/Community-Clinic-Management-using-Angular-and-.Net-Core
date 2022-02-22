import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Service } from '../../../models/Service/service';
import { ServiceService } from '../../../services/Service/service.service';
import { SnackNotifyService } from '../../../services/SnackBar/snack-notify.service';

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.css']
})
export class ServiceCreateComponent implements OnInit {
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

  insert() {
    if (this.serviceForm.invalid) return;
    this.service.serviceName = this.f.serviceName.value;
    this.service.symptoms = this.f.symptoms.value;
    this.service.treatmentProcedure = this.f.treatmentProcedure.value;
    this.service.preferedMedicines = this.f.preferedMedicines.value;
    this.serviceSvc.insertService(this.service).subscribe(m => {
      this.snackNotifySvc.success("Data Inserted Successfully", "OK");
      this.serviceForm.reset({});
    }, err => {
      this.snackNotifySvc.fail("Oops! Data Insert Failed", "DISMISS");
    })
  }

  constructor(private serviceSvc: ServiceService, private snackNotifySvc: SnackNotifyService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
