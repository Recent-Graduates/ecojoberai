package com.kas.ecojober.entities;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "machine")
public class Machine {
	@Id
	@Indexed(unique = true)
	private String machineId;
	private String machineName;
	private String zone;
	private ArrayList<String> capabilities;
	private String status;

}