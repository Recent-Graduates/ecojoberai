package com.kas.ecojober.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kas.ecojober.entities.Machine;

public interface MachinesRepository extends JpaRepository<Machine, String> {

}
