import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from 'model/doctor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {
private addDoctorRecordUrl:string;
private getDoctorRecordUrl:string;
private getAllDoctorRecordsUrl:string;
private updateDoctorRecordUrl:string;
private deleteDoctorRecordUrl:string;
  constructor(private http:HttpClient) {
    this.addDoctorRecordUrl ="http://localhost:8080/addDoctorDetails";
    this.getAllDoctorRecordsUrl="http://localhost:8080/doctors";
    this.getDoctorRecordUrl="http://localhost:8080/getDoctorById";
    this.updateDoctorRecordUrl="http://localhost:8080/updateDoctorRecordsById";
    this.deleteDoctorRecordUrl="http://localhost:8080//deleteRecordById";
   }
   public saveDoctor(doctor:Doctor)
   {
     return this.http.post<Doctor>(this.addDoctorRecordUrl,doctor);
   }
   public getDoctorList():Observable<Doctor[]>
   {
     return this.http.get<Doctor[]>(this.getAllDoctorRecordsUrl);
   }
   updateDoctor(doctorId:number, doctor:Doctor):Observable<Object>{
     return this.http.put<Doctor>(`${this.updateDoctorRecordUrl}/${doctorId}`, doctor)
   }
   getdoctor(doctorlId:number):Observable<Doctor>
   {
     return this.http.get<Doctor>(`${this.getDoctorRecordUrl}/${doctorlId}`)
   }
   deleteDoctor(doctorId: number): Observable<any> {
     return this.http.delete(`${this.deleteDoctorRecordUrl}/${doctorId}`, { responseType: 'text' });
   }
}
