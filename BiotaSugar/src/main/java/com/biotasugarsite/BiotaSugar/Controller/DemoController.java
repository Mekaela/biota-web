package com.biotasugarsite.BiotaSugar.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/demo-controller")
public class DemoController {
	@GetMapping
	public ResponseEntity<String> sayHello() {
		return ResponseEntity.ok("Hello, from the API");
	}

	@GetMapping("/say-good-bye")
	public ResponseEntity<String> sayGoodbye() {
		return ResponseEntity.ok("Goodbye, from the API");
	}
}
