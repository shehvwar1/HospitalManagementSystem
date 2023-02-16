import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'model/doctor';
import { DoctorServiceService } from 'service/doctor-service.service';

@Component({
  selector: 'app-doctot-details-update',
  templateUrl: './doctot-details-update.component.html',
  styleUrls: ['./doctot-details-update.component.css']
})
export class DoctotDetailsUpdateComponent implements OnInit{
  doctorId!:number;
  doctor!:Doctor;
  constructor(private router:Router,private route:ActivatedRoute,private doctorService:DoctorServiceService){}
  ngOnInit(){
    this.doctor = new Doctor();
      this.doctorId = this.route.snapshot.params['doctorId'];
      this.doctorService.getdoctor(this.doctorId).subscribe(data=>{
        this.doctor = data;
        console.log(data)
      });
  }
  onSubmit()
  {
    this.doctorService.updateDoctor(this.doctorId, this.doctor).subscribe( data =>{
      // this.goToEmployeeList();
      this.router.navigate(['doctors']);
    })

}
}