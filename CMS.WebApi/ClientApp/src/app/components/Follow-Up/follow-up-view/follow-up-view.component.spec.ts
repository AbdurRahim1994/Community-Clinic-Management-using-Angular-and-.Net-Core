import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUpViewComponent } from './follow-up-view.component';

describe('FollowUpViewComponent', () => {
  let component: FollowUpViewComponent;
  let fixture: ComponentFixture<FollowUpViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowUpViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowUpViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
