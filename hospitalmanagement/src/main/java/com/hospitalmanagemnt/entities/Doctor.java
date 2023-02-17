package com.hospitalmanagemnt.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

@Entity
@Table(name="doctor")
public class Doctor {
	@Id
	private Long doctorId;
	@Column
	private String doctorName;
	@Column
	private String contactNumber;
	@Column
	private String email;

}
