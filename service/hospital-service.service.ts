import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hospital } from 'model/hospital';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalServiceService {
  private addUrl:string;
  private getAllUrl:string;
  private updateUrl:string;
  private getByIdUrl:string; 
  private deleteByIdUrl:string;
  constructor(private http:HttpClient) { 
    this.addUrl ="http://localhost:8080/addHospitals";
    this.getAllUrl="http://localhost:8080/getAllHospitalRecords";
    this.updateUrl="http://localhost:8080/updateHospitalRecords";
    this.getByIdUrl="http://localhost:8080/getHospitalById";
    this.deleteByIdUrl="http://localhost:8080/deleteRecordById";
  }
  public saveHospital(hospital:Hospital)
  {
    return this.http.post<Hospital>(this.addUrl,hospital);
  }
  public getHospitalList():Observable<Hospital[]>
  {
    return this.http.get<Hospital[]>(this.getAllUrl);
  }
  updateHospital(hospitalId:number, hospital:Hospital):Observable<Object>{
    return this.http.put<Hospital>(`${this.updateUrl}/${hospitalId}`, hospital)
  }
  getHospital(hospitalId:number):Observable<Hospital>
  {
    return this.http.get<Hospital>(`${this.getByIdUrl}/${hospitalId}`)
  }
  deleteHospital(hospitalId: number): Observable<any> {
    return this.http.delete(`${this.deleteByIdUrl}/${hospitalId}`, { responseType: 'text' });
  }
}
