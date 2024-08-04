package com.kas.ecojober.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "Jobs")
public class Job {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long jobId;
	private String urgency;
	private String status;
	private String originatingZone;
	private LocalDateTime creationTime;
	private LocalDateTime deadline;
	private LocalDateTime scheduledTime;
	private String kind;
	private boolean distributable;

}
