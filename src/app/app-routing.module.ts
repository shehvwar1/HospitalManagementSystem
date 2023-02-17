import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddHospitalComponent } from './add-hospital/add-hospital.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctotDetailsUpdateComponent } from './doctot-details-update/doctot-details-update.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { UpdateHospitalComponent } from './update-hospital/update-hospital.component';
import { ViewDoctorDetailComponent } from './view-doctor-detail/view-doctor-detail.component';
import { ViewHospitalDetailComponent } from './view-hospital-detail/view-hospital-detail.component';
//Roting sectionn
const routes: Routes = [
  {path:'addHospitals', component:AddHospitalComponent},
  {path:'getAllHospitalRecords', component:HospitalListComponent},
  {path:'updateHospitalRecords/:hospitalId', component:UpdateHospitalComponent},
  {path:'getHospitalById/:hospitalId', component:ViewHospitalDetailComponent},
  {path:'addDoctorDetails', component:AddDoctorComponent },
  {path:'doctors', component:DoctorListComponent},
  {path:'getDoctorById/:doctorId', component:ViewDoctorDetailComponent},
  {path:'updateDoctorRecordsById/:doctorId', component:DoctotDetailsUpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
