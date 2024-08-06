package com.kas.ecojober.entities;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "Jobs")
public class Job {

	@Id
	@Indexed(unique = true)
	private String jobId;
	private String urgency;
	private String status;
	private String originatingZone;
	private LocalDateTime creationTime;
	private LocalDateTime deadline;
	private LocalDateTime scheduledTime;
	private String kind;
	private boolean distributable;

}
