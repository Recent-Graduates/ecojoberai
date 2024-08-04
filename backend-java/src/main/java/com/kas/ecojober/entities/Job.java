package com.kas.ecojober.entities;

import org.springframework.stereotype.Component;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Component
@Entity
public class Job {

	@Id
	private String jobId;
	private String urgency;
	private String status;
	private String originatingZone;
	private String creationTime;
	private String deadline;
	private String scheduledTime;
	private String kind;
	private String distributable;

}
