package com.kas.ecojober.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.kas.ecojober.entities.Job;
import com.kas.ecojober.repositories.JobsRepository;

/**
 * A supporting SchedulingService to navigate through the database table, Jobs
 * and then update each jobs status accordingly.
 * 
 * @author kssasarma
 */
@Service
public class SchedulingService {

	/**
	 * Constructor based injection.
	 * 
	 * @param jobsRepository
	 */
	public SchedulingService(JobsRepository jobsRepository) {
		this.jobsRepository = jobsRepository;
	}

	private JobsRepository jobsRepository;

	/**
	 * This method gets executed for every 60000ms = 1minute It will pick all the
	 * datbase entries in Jobs table whose status colum has the value "scheduling in
	 * progress" and schedules then by next 5 minutes
	 * 
	 * @author kssasarma
	 */
	@Scheduled(fixedRate = 60000) // Check every minute
	public void updateScheduledJobs() {
		List<Job> jobs = jobsRepository.findByStatus("scheduling in progress");
		LocalDateTime newScheduledTime = LocalDateTime.now().plusMinutes(5);
		for (Job job : jobs) {
			job.setScheduledTime(newScheduledTime);
			job.setStatus("scheduled");
			jobsRepository.save(job);
		}
	}

	/**
	 * This method gets executed for every 60000ms = 1minute It will pick all the
	 * datbase entries in Jobs table whose status colum has the value "created" and
	 * changes their state to "scheduling in progress"
	 * 
	 * @author kssasarma
	 */
	@Scheduled(fixedRate = 60000) // Check every minute
	public void planScheduleJobs() {
		List<Job> jobs = jobsRepository.findByStatus("created");
		LocalDateTime newScheduledTime = LocalDateTime.now().plusMinutes(5);
		for (Job job : jobs) {
			job.setScheduledTime(newScheduledTime);
			job.setStatus("scheduling in progress");
			jobsRepository.save(job);
		}
	}

	/**
	 * This method gets executed for every 60000ms = 1minute It will pick all the
	 * datbase entries in Jobs table whose status colum has the value "scheduled"
	 * and checks if the scheduledTime is past and change their status to
	 * "completed"
	 * 
	 * @author kssasarma
	 */
	@Scheduled(fixedRate = 60000) // Check every minute
	public void completeScheduledJobs() {
		List<Job> jobs = jobsRepository.findByStatus("scheduled");
		for (Job job : jobs) {
			if (job.getScheduledTime().isBefore(LocalDateTime.now())) {
				job.setStatus("completed");
				jobsRepository.save(job);
			}

		}
	}
}
