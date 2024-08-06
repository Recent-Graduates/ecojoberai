package com.kas.ecojober.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kas.ecojober.entities.Machine;
import com.kas.ecojober.repositories.MachinesRepository;

@Service
public class MachinesService {

	@Autowired
	private MachinesRepository machinesRepository;

	public List<Machine> getAllMachines() {
		return machinesRepository.findAll();
	}

	public Optional<Machine> getMachineById(String id) {
		return machinesRepository.findById(id);
	}

	public Machine addMachine(Machine machine) {
		return machinesRepository.save(machine);
	}

}
