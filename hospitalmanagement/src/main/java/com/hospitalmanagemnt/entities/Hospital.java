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
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name="hospital")
public class Hospital {
	@Id
	private Long hospitalId;
	@Column
	private String hospitalName;
	@Column
	private String address;

}
