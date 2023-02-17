package com.hospitalmanagemnt.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hospitalmanagemnt.dtos.HospitalDto;
import com.hospitalmanagemnt.entities.Hospital;
import com.hospitalmanagemnt.exceptionhandler.DataNotFoundException;
import com.hospitalmanagemnt.servicesimpl.HospitalSeviceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HospitalController {
	
	@Autowired
	HospitalSeviceImpl hospitalServiceImpl;
	
	@PostMapping("/addHospitals")
	public ResponseEntity<Hospital> addHospital(@RequestBody @Valid HospitalDto hospitaldto)
	{
		try {
			Hospital hospital = hospitalServiceImpl.addHospitalRecord(hospitaldto);
			if(hospital!= null)
			{
				return new ResponseEntity<Hospital>(hospital,HttpStatus.CREATED);
			}
		}
		catch(Exception e)
		{
		throw new DataNotFoundException("unable to add hospital record");	
		}
		return new ResponseEntity<Hospital>(HttpStatus.BAD_REQUEST);
	}
	@GetMapping("/getAllHospitalRecords")
	
	public ResponseEntity<List<Hospital>> getAllHospitalRecords()
	{
		return new ResponseEntity<>(hospitalServiceImpl.displayAll(),HttpStatus.OK);
		}
	@PutMapping("/updateHospitalRecords/{hospitalId}")
	public ResponseEntity<String> updateHospital(@PathVariable("hospitalId") Long hospitalId, @RequestBody @Valid HospitalDto hospitalDto)
	{
		try
		{
		 String hospital=hospitalServiceImpl.updateHospitalRecord(hospitalId, hospitalDto);
		 if(hospital!=null)
			return new ResponseEntity<String>(hospital,HttpStatus.ACCEPTED);
		}
		catch(Exception e)
		{
			throw new DataNotFoundException("Unable to update hospital records");
		}
		return new ResponseEntity<String>(HttpStatus.NOT_MODIFIED);		
	}
	@GetMapping("/getHospitalById/{hospitalId}")
	public ResponseEntity<Hospital> getHospitalRecordById(@PathVariable("hospitalId") Long hospitalId)
	{
		return new ResponseEntity<Hospital>(hospitalServiceImpl.getHospitalDetailsById(hospitalId),HttpStatus.OK);
		}
	@DeleteMapping(path="/deleteRecordById/{hospitalId}")
	public ResponseEntity<String> deleteHospitalRecord(@PathVariable("hospitalId") Long hospitalId)
	{
		try 
		{
		 String hospital=hospitalServiceImpl.deleteHospitalRecordById(hospitalId);
		 if(hospital!=null)
			return new ResponseEntity<String>(hospital,HttpStatus.ACCEPTED);
		}
		catch(Exception e)
		{
			throw new DataNotFoundException("Unable to delete hospital records");
		}
		return new ResponseEntity<String>(HttpStatus.NOT_ACCEPTABLE);		
	}
//	@GetMapping("/getHospitalById/{hospitalId}")
//	public ResponseEntity<Hospital> getHospitalDetailsById(@PathVariable("hospitalId") Long hospitalId)
//	{
//		try {
//			Hospital hospital = hospitalServiceImpl.getHospitalDetailsById(hospitalId);
//			if(hospital!=null) {
//				return new ResponseEntity<Hospital>(hospital,HttpStatus.FOUND);
//			}
//		}
//		catch(Exception e)
//		{
//			throw new DataNotFoundException("No Such hospital with id " + hospitalId + " Found");
//		}
//		 return new ResponseEntity<Hospital>(HttpStatus.NOT_FOUND);
//		
//	}
	
}
