package com.hospitalmanagemnt.services;

import java.util.List;

import com.hospitalmanagemnt.dtos.HospitalDto;
import com.hospitalmanagemnt.entities.Hospital;

public interface HospitalService {
	//public Hospital addHospitalAndDoctorRecord(HospitalDto hospitalDto);
		public Hospital addHospitalRecord(HospitalDto hospitalDto);
		public Hospital getHospitalDetailsById(Long hospitalId);
		public List<Hospital> displayAll();
		public String updateHospitalRecord(Long hospitalId, HospitalDto params);
		public String deleteHospitalRecordById(Long hospitalId);
		public String deleteAllHospitalRecords();

}
