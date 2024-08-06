package com.kas.ecojober.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.kas.ecojober.entities.Machine;

@Repository
public interface MachinesRepository extends MongoRepository<Machine, String> {

}
