import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'model/doctor';
import { DoctorServiceService } from 'service/doctor-service.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent  {
  doctor:Doctor;
  constructor(private router:Router,private route:ActivatedRoute,private doctorService:DoctorServiceService)
  {
    this.doctor = new Doctor();
  }
  onSubmit()
  {
    this.doctorService['saveDoctor'](this.doctor).subscribe((result:any)=>this.doctor=result);
    this.router.navigate(['doctors']);
    //this.doctorService['addDoctorRecordUrl'](this.doctor).subscribe((result:any)=>this.doctor=result);
    
  }

}
