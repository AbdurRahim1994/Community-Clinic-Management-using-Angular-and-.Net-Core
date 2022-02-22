import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUpCreateComponent } from './follow-up-create.component';

describe('FollowUpCreateComponent', () => {
  let component: FollowUpCreateComponent;
  let fixture: ComponentFixture<FollowUpCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowUpCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowUpCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
