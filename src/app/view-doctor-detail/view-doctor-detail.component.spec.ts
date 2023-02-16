import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDoctorDetailComponent } from './view-doctor-detail.component';

describe('ViewDoctorDetailComponent', () => {
  let component: ViewDoctorDetailComponent;
  let fixture: ComponentFixture<ViewDoctorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDoctorDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDoctorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
