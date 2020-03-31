package com.example.springbootmongo.repository;

import com.example.springbootmongo.model.LED;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LEDRepository extends MongoRepository<LED,String> {
}
