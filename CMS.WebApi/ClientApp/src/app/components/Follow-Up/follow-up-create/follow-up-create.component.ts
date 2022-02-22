import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { FollowUp } from '../../../models/Follow-Up/follow-up';
import { PhysicalCheckUp } from '../../../models/Physical-CheckUp/physical-check-up';
import { FollowUpService } from '../../../services/Follow-Up/follow-up.service';
import { PhysicalCheckUpService } from '../../../services/Physical-CheckUp/physical-check-up.service';
import { SnackNotifyService } from '../../../services/SnackBar/snack-notify.service';

@Component({
  selector: 'app-follow-up-create',
  templateUrl: './follow-up-create.component.html',
  styleUrls: ['./follow-up-create.component.css']
})
export class FollowUpCreateComponent implements OnInit {
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

  insert() {
    if (this.followUpForm.invalid) return;

    this.followUp.followUpDate = this.f.followUpDate.value;
    this.followUp.followUpDate = new Date(<string>this.datePipe.transform(this.followUp.followUpDate, "MMM dd yyyy"));
    this.followUp.physicalCheckUpId = this.f.physicalCheckUpId.value;
    this.followUp.checkUpDate = this.f.checkUpDate.value;
    this.followUp.checkUpDate = new Date(<string>this.datePipe.transform(this.followUp.checkUpDate, "MMM dd yyyy"));
    this.followUp.testGiven = this.f.testGiven.value;
    this.followUp.previousMedicine = this.f.previousMedicine.value;
    this.followUp.testResult = this.f.testResult.value;
    this.followUp.observation = this.f.observation.value;
    this.followUp.updatedMedicine = this.f.updatedMedicine.value;
    this.followUp.advice = this.f.advice.value;

    this.followUpSvc.insertFollowUp(this.followUp).subscribe(f => {
      this.snackNotifySvc.success("Data Inserted Successfully", "OK");
    }, err => {
      this.snackNotifySvc.fail("Oops ! Data Insert Failed", "DISMISS");
    })
  }

  //getPatientName(id: number) {
  //  let p = this.physicalCheckUp.find(p => p.physicalCheckUpId = id);
  //  return p ? p.patientName : '';
  //}

  constructor(
    private followUpSvc: FollowUpService,
    private snackNotifySvc: SnackNotifyService,
    private physicalCheckUpSvc: PhysicalCheckUpService,
    private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.physicalCheckUpSvc.getPhysicalCheckUp().subscribe(phc => {
      this.physicalCheckUp = phc;
    })
  }

}
