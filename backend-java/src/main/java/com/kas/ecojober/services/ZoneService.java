package com.kas.ecojober.services;

import java.net.URI;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class ZoneService {

	@Value("${electrycityMapsURL.url}")
	private String electrycityMapsURL;

	private final RestTemplate restTemplate;

	public ZoneService(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}

	public String getAllZones() {
		URI uri = UriComponentsBuilder.fromUriString(electrycityMapsURL).pathSegment("zones").build().toUri();
		return restTemplate.getForObject(uri, String.class);
	}

}
