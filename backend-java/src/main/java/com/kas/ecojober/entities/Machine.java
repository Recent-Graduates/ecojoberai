package com.kas.ecojober.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "machine")
public class Machine {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long machineId;
	private String machineName;
	private String zone;
	private String capabilities;
	private String status;

}