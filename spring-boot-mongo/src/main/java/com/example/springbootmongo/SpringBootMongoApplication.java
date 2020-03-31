package com.example.springbootmongo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootMongoApplication {

	public static void main(String[] args) {

		System.setProperty("server.port","8081");
		SpringApplication.run(SpringBootMongoApplication.class, args);
	}


}


