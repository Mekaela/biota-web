package com.biotasugarsite.BiotaSugar;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.biotasugarsite.BiotaSugar.config.ApplicationConfig;
import com.biotasugarsite.BiotaSugar.user.UserRepository;

@SpringBootApplication
public class BiotaSugarApplication {

	public static void main(String[] args) {
		SpringApplication.run(BiotaSugarApplication.class, args);
	}

}
