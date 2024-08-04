package com.kas.ecojober.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kas.ecojober.entities.Job;

public interface JobsRepository extends JpaRepository<Job, String> {

}
