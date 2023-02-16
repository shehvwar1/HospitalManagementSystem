import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospital } from 'model/hospital';
import { HospitalServiceService } from 'service/hospital-service.service';

@Component({
  selector: 'app-update-hospital',
  templateUrl: './update-hospital.component.html',
  styleUrls: ['./update-hospital.component.css']
})
export class UpdateHospitalComponent implements OnInit {
  hospitalId!:number;
  hospital!:Hospital;
  constructor(private router:Router,private route:ActivatedRoute,private hospitalService:HospitalServiceService){}
  ngOnInit() {
    this.hospital = new Hospital();
    this.hospitalId = this.route.snapshot.params['hospitalId'];
    this.hospitalService.getHospital(this.hospitalId).subscribe(data=>{
      this.hospital = data;
      console.log(data)
    });
  }
  onSubmit()
  {
    this.hospitalService.updateHospital(this.hospitalId, this.hospital).subscribe( data =>{
      // this.goToEmployeeList();
      this.router.navigate(['getAllHospitalRecords']);
    })
    // this.hospitalService['updateHospital']( this.hospitalId, this.hospital).subscribe((result:any)=>this.hospital=result);
    // this.gotoBookList();
    // public gotoList();
    //
     // this.router.navigate(['getAllHospitalRecords'])
  }
  // goToEmployeeList(){
  //   this.router.navigate(['getAllHospitalRecords']);
  // }
  // gotoHospitalList()
  // {
  //   this.router.navigate(['getAllHospitalRecords'])
  // }
  // goToHospital()
  // {
  //   this.router.navigate(['getAllHospitalRecords']);
  // }
}
