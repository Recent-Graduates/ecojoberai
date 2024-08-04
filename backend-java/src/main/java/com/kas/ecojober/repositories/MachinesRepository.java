package com.kas.ecojober.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kas.ecojober.entities.Machine;

@Repository
public interface MachinesRepository extends JpaRepository<Machine, Long> {

}
