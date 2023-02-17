package com.hospitalmanagemnt.dtos;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DoctorDto {
	@NotNull(message="Doctor Id Cannot be null")
	private Long doctorId;
	@NotBlank(message = "Doctor NameCannot be blank")
	@Size(min = 3, max = 40, message = "Doctor Name must be min.3 characcters long but not more than 40 characters ")
	private String doctorName;
	@Pattern(regexp = "\\d{10}", message = "Contact number must be 10 digits long")
	@NotBlank(message = "Contact number is required")
	private String contactNumber;
	@Email(message = "invalid email format")
	@NotBlank(message = "Email  must not be blank")
	private String email;
}
