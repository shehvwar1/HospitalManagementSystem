import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hospital } from 'model/hospital';
import { HospitalServiceService } from 'service/hospital-service.service';

@Component({
  selector: 'app-view-hospital-detail',
  templateUrl: './view-hospital-detail.component.html',
  styleUrls: ['./view-hospital-detail.component.css']
})
export class ViewHospitalDetailComponent implements OnInit{
  hospitalId!:number;
  hospital!: Hospital;
  constructor(private route: ActivatedRoute, private hospitalService: HospitalServiceService) { }
  ngOnInit(): void {
    
    this.hospitalId = this.route.snapshot.params['hospitalId'];
    this.hospital = new Hospital();
    this.hospitalService.getHospital(this.hospitalId).subscribe( data => {
      this.hospital = data;
      console.log(data)
    });
  }

}
