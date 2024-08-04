package com.kas.ecojober.controllers;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kas.ecojober.services.ZoneService;

@RestController
@RequestMapping("/api/v1")
public class ZoneController {

	private ZoneService zoneService;

	public ZoneController(ZoneService zoneService) {
		this.zoneService = zoneService;
	}

	@GetMapping("/zones")
	public ResponseEntity<String> getAllZones() {
		String response = zoneService.getAllZones();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		return new ResponseEntity<>(response, headers, HttpStatus.OK);
	}

}
