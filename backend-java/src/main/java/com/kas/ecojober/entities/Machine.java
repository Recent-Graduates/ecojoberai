package com.kas.ecojober.entities;

import org.springframework.stereotype.Component;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Component
@Entity
public class Machine {

	@Id
	private String machineId;
	private String machineName;
	private String zone;
	private String capabilities;
	private String status;

}