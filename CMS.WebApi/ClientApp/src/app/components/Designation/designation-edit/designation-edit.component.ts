import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Designation } from '../../../models/Designation/designation';
import { DesignationService } from '../../../services/Designation/designation.service';
import { SnackNotifyService } from '../../../services/SnackBar/snack-notify.service';

@Component({
  selector: 'app-designation-edit',
  templateUrl: './designation-edit.component.html',
  styleUrls: ['./designation-edit.component.css']
})
export class DesignationEditComponent implements OnInit {
  designation: Designation = new Designation();
  designationForm: FormGroup = new FormGroup({
    positionName: new FormControl('', Validators.required)
  });

  get f() {
    return this.designationForm.controls;
  }

  update() {
    if (this.designationForm.invalid) return;
    this.designation.positionName = this.f.positionName.value;
    this.designationSvc.updateDesignation(this.designation).subscribe(d => {
      this.snackNotifySvc.success("Data Updated Successfully", "OK");
      console.log(d);
    }, err => {
      this.snackNotifySvc.fail("Oops!! Data Updade Failed", "DISMISS");
    })
  }
  constructor(private designationSvc: DesignationService, private snackNotifySvc: SnackNotifyService, private dialog: MatDialog, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id: number = this.activatedRoute.snapshot.params.id;
    this.designationSvc.getDesignationById(id).subscribe(x => {
      this.designation = x;
      this.designationForm.patchValue(this.designation);
    }, err => {
      this.snackNotifySvc.fail("Data loading failed !!!", "DISMISS");
    })
  }

}
