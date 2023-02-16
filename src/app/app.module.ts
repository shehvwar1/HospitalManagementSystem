import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AddHospitalComponent } from './add-hospital/add-hospital.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { UpdateHospitalComponent } from './update-hospital/update-hospital.component';
import { ViewHospitalDetailComponent } from './view-hospital-detail/view-hospital-detail.component';
import { ViewDoctorDetailComponent } from './view-doctor-detail/view-doctor-detail.component';
import { DoctotDetailsUpdateComponent } from './doctot-details-update/doctot-details-update.component';

@NgModule({
  declarations: [
    AppComponent,
    AddHospitalComponent,
    AddDoctorComponent,
    HospitalListComponent,
    DoctorListComponent,
    UpdateHospitalComponent,
    ViewHospitalDetailComponent,
    ViewDoctorDetailComponent,
    DoctotDetailsUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
