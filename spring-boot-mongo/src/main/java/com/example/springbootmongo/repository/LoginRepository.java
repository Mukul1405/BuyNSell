package com.example.springbootmongo.repository;

import com.example.springbootmongo.model.Login;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LoginRepository extends MongoRepository<Login,String> {


}
