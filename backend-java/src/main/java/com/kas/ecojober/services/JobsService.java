package com.kas.ecojober.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kas.ecojober.entities.Job;
import com.kas.ecojober.repositories.JobsRepository;

@Service
public class JobsService {

	@Autowired
	private JobsRepository jobsRepository;

	public List<Job> getAllJobs() {
		List<Job> jobs = jobsRepository.findAll();
		return jobs;
	}

	public Optional<Job> getJobById(String id) {
		return jobsRepository.findById(id);
	}

	public Job addJob(Job newJob) {
		return jobsRepository.save(newJob);
	}
}
