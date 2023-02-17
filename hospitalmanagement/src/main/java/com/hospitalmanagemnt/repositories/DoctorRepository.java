package com.hospitalmanagemnt.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hospitalmanagemnt.entities.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long>{

}
