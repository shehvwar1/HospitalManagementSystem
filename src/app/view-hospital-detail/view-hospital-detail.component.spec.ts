import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHospitalDetailComponent } from './view-hospital-detail.component';

describe('ViewHospitalDetailComponent', () => {
  let component: ViewHospitalDetailComponent;
  let fixture: ComponentFixture<ViewHospitalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHospitalDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewHospitalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
