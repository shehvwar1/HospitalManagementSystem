import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HospitalServiceService } from 'service/hospital-service.service';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {
  hospital:any;
  constructor(private hospitalService:HospitalServiceService, private router:Router){}
  ngOnInit() {
    this.hospitalService.getHospitalList().subscribe(data=>{
      this.hospital=data;
      console.log(data)
    });
  }
  updateHospitalRecord(hospitalId:number)
  {
    this.router.navigate(['updateHospitalRecords',hospitalId]);
  }
  deleteHospitalRecord(hospitalId: number) {
    this.hospitalService.deleteHospital(hospitalId)
      .subscribe(
        data => {
          alert("data deleted successfully")
          console.log(data);
          this.ngOnInit();
         })
        }
        HospitalDetails(hospitalId: number){
          this.router.navigate(['getHospitalById', hospitalId]);
        }
}
