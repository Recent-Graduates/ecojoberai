package com.kas.ecojober.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kas.ecojober.entities.Job;

@Repository
public interface JobsRepository extends JpaRepository<Job, Long> {

}
