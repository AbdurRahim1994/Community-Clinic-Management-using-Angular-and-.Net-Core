import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Designation } from '../../../models/Designation/designation';
import { DesignationService } from '../../../services/Designation/designation.service';
import { SnackNotifyService } from '../../../services/SnackBar/snack-notify.service';

@Component({
  selector: 'app-designation-create',
  templateUrl: './designation-create.component.html',
  styleUrls: ['./designation-create.component.css']
})
export class DesignationCreateComponent implements OnInit {
  designation: Designation = new Designation();
  designationForm: FormGroup = new FormGroup({
    positionName: new FormControl('', [Validators.required, Validators.maxLength(30)])
  });

  get f() {
    return this.designationForm.controls;
  }

  insert() {
    if (this.designationForm.invalid) return;
    this.designation.positionName = this.f.positionName.value;
    this.designationSvc.insertDesignation(this.designation).subscribe(d => {
      this.snackNotifySvc.success("Data Insert Successfully", "OK");
      this.designationForm.reset({});
    }, err => {
      this.snackNotifySvc.fail("Oops! Insert Failed", "DISMISS");
    })
  }
  constructor(private designationSvc: DesignationService, private snackNotifySvc: SnackNotifyService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
