package com.kas.ecojober.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/api/v1")
public class ZoneController {

	@Value("${electrycityMapsURL.url}")
	private String electrycityMapsURL;

	private final RestTemplate restTemplate;

	public ZoneController(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}

	@GetMapping("/zones")
	public ResponseEntity<String> getAllZones() {
		URI uri = UriComponentsBuilder.fromUriString(electrycityMapsURL).pathSegment("zones").build().toUri();
		String response = restTemplate.getForObject(uri, String.class);
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		return new ResponseEntity<>(response, headers, HttpStatus.OK);
	}

}
