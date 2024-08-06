package com.kas.ecojober.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kas.ecojober.entities.Job;
import com.kas.ecojober.services.JobsService;

@RestController
@RequestMapping("/api/v1/jobs")
public class JobsController {

	@Autowired
	private JobsService jobsService;

	@GetMapping("/")
	public ResponseEntity<List<Job>> getAllJobs() {
		List<Job> response = jobsService.getAllJobs();
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Optional<Job>> getJobById(@PathVariable String id) {
		Optional<Job> jobWithGivenId = jobsService.getJobById(id);
		return new ResponseEntity<>(jobWithGivenId, HttpStatus.OK);
	}

	@PostMapping("/")
	public ResponseEntity<Job> addJob(@RequestBody Job newJob) {
		Job addedJob = jobsService.addJob(newJob);
		return new ResponseEntity<>(addedJob, HttpStatus.OK);
	}

}
