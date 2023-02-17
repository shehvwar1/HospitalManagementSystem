import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'model/doctor';
import { DoctorServiceService } from 'service/doctor-service.service';
import { HospitalServiceService } from 'service/hospital-service.service';

@Component({
  selector: 'app-view-doctor-detail',
  templateUrl: './view-doctor-detail.component.html',
  styleUrls: ['./view-doctor-detail.component.css']
})
export class ViewDoctorDetailComponent implements OnInit {
  doctorId!:number;
  doctor!: Doctor;
  constructor(private route: ActivatedRoute, private router:Router,private doctorService: DoctorServiceService) { }
  ngOnInit(): void {
    this.doctorId = this.route.snapshot.params['doctorId'];
    this.doctor = new Doctor();
    this.doctorService.getdoctor(this.doctorId).subscribe( data => {
      this.doctor = data;
      console.log(data)
  })
  
}
list()
  {
    this.router.navigate(['doctors']);
  }

}
