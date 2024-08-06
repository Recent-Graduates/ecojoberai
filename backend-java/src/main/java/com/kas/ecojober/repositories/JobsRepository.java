package com.kas.ecojober.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.kas.ecojober.entities.Job;

@Repository
public interface JobsRepository extends MongoRepository<Job, String> {

	List<Job> findByStatus(String status);

}
