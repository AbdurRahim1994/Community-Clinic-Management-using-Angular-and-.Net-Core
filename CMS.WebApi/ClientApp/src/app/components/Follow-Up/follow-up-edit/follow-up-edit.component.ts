import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FollowUp } from '../../../models/Follow-Up/follow-up';
import { PhysicalCheckUp } from '../../../models/Physical-CheckUp/physical-check-up';
import { FollowUpService } from '../../../services/Follow-Up/follow-up.service';
import { PhysicalCheckUpService } from '../../../services/Physical-CheckUp/physical-check-up.service';
import { SnackNotifyService } from '../../../services/SnackBar/snack-notify.service';

@Component({
  selector: 'app-follow-up-edit',
  templateUrl: './follow-up-edit.component.html',
  styleUrls: ['./follow-up-edit.component.css']
})
export class FollowUpEditComponent implements OnInit {
  followUp: FollowUp = new FollowUp();
  physicalCheckUp: PhysicalCheckUp[] = [];

  followUpForm: FormGroup = new FormGroup({
    followUpDate: new FormControl(undefined, Validators.required),
    physicalCheckUpId: new FormControl('', Validators.required),
    checkUpDate: new FormControl(undefined, Validators.required),
    testGiven: new FormControl('', Validators.required),
    previousMedicine: new FormControl('', Validators.required),
    testResult: new FormControl('', Validators.required),
    observation: new FormControl('', Validators.required),
    updatedMedicine: new FormControl('', Validators.required),
    advice: new FormControl('', Validators.required)
  })

  get f() {
    return this.followUpForm.controls;
  }

  update() {
    if (this.followUpForm.invalid) return;

    this.followUp.followUpDate = this.f.followUpDate.value;
    this.followUp.followUpDate = new Date(<string>this.datePipe.transform(this.followUp.followUpDate, "MMM dd yyyy"));
    //this.followUp.physicalCheckUpId = this.f.physicalCheckUpId.value;
    //this.followUp.checkUpDate = this.f.checkUpDate.value;
    //this.followUp.checkUpDate = new Date(<string>this.datePipe.transform(this.followUp.checkUpDate, "MMM dd yyyy"));
    //this.followUp.testGiven = this.f.testGiven.value;
    //this.followUp.previousMedicine = this.f.previousMedicine.value;
    this.followUp.testResult = this.f.testResult.value;
    this.followUp.observation = this.f.observation.value;
    this.followUp.updatedMedicine = this.f.updatedMedicine.value;
    this.followUp.advice = this.f.advice.value;

    this.followUpSvc.updateFollowUp(this.followUp).subscribe(f => {
      this.snackNotifySvc.success("Data Updated Successfully", "OK");
    }, err => {
      this.snackNotifySvc.fail("Oops ! Data Update Failed", "DISMISS");
    })
  }

  constructor(
    private followUpSvc: FollowUpService,
    private snackNotifySvc: SnackNotifyService,
    private physicalCheckUpSvc: PhysicalCheckUpService,
    private datePipe: DatePipe,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.physicalCheckUpSvc.getPhysicalCheckUp().subscribe(phc => {
      this.physicalCheckUp = phc;
    });

    let id: number = this.activatedRoute.snapshot.params.id;
    this.followUpSvc.getFollowUpById(id).subscribe(f => {
      this.followUp = f;
      this.followUpForm.patchValue(this.followUp);
    }, err => {
      this.snackNotifySvc.fail("Follow Up Data loading failed","DISMISS");
    })
  }

}
