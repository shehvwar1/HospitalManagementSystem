package com.hospitalmanagemnt.dtos;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HospitalDto {
	@NotNull(message="Hospital Id cannot be null")
	private Long hospitalId;
	@NotBlank(message="Hospital Name cannot be blank")
	@Size(min = 3, max = 40, message="Hospital name must be three characters long")
	private String hospitalName;
	@NotBlank(message="Hospital Address cannot be blank")
	@Size(min = 3, max = 40, message="Hospital address must be three characters long")
	private String address;

}
