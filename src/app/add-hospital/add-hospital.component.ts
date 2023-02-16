import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospital } from 'model/hospital';
import { HospitalServiceService } from 'service/hospital-service.service';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.css']
})
export class AddHospitalComponent{
  hospital:Hospital;
  constructor(private router:Router,private route:ActivatedRoute,private hospitalService:HospitalServiceService)
  {
    this.hospital = new Hospital();
  }
  onSubmit()
  {
    this.hospitalService['saveHospital'](this.hospital).subscribe((result:any)=>this.hospital=result);
    this.router.navigate(['getAllHospitalRecords']);
    
  }
  // goToHospitalList()
  // {
  //   this.router.navigate(['getAllHospitalRecords']);
  // }

}
