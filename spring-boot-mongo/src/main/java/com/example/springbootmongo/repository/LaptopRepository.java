package com.example.springbootmongo.repository;

import com.example.springbootmongo.model.Laptop;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LaptopRepository extends MongoRepository<Laptop,String> {

}
