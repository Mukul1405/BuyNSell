package com.example.springbootmongo.repository;


import com.example.springbootmongo.model.Registration;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RegistrationRepository extends MongoRepository<Registration,String>{


    Registration findByEmailAndPassword(String email, String password);
}
