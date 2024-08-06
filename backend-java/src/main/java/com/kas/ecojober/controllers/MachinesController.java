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

import com.kas.ecojober.entities.Machine;
import com.kas.ecojober.services.MachinesService;

@RestController
@RequestMapping("/api/v1/machines")
public class MachinesController {

	@Autowired
	private MachinesService machinesService;

	@GetMapping("/")
	public ResponseEntity<List<Machine>> getAllMachines() {
		List<Machine> response = machinesService.getAllMachines();
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Optional<Machine>> getMachineById(@PathVariable String id) {
		Optional<Machine> response = machinesService.getMachineById(id);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@PostMapping("/")
	public ResponseEntity<Machine> addMachine(@RequestBody Machine newMachine) {
		Machine response = machinesService.addMachine(newMachine);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
}
