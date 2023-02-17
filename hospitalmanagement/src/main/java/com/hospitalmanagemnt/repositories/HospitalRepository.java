package com.hospitalmanagemnt.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hospitalmanagemnt.entities.Hospital;

public interface HospitalRepository extends JpaRepository<Hospital, Long> {

}
