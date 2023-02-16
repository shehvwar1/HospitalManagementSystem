import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorServiceService } from 'service/doctor-service.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctor:any;
  constructor(private doctorService:DoctorServiceService, private router:Router, ){}
  ngOnInit(){
   this.doctorService.getDoctorList().subscribe(data=>{
    this.doctor=data;
   });
  }
  deleteDoctorRecord(doctorId: number) {
    this.doctorService.deleteDoctor(doctorId)
      .subscribe(
        data => {
          alert("data deleted successfully")
          console.log(data);
          this.ngOnInit();
        })
}
DoctorDetails(doctorId: number){
  this.router.navigate(['getDoctorById', doctorId]);
}
updateDoctorRecord(doctorId:number)
{
  this.router.navigate(['updateDoctorRecordsById', doctorId]);
}
}
