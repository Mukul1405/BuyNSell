package com.example.springbootmongo.repository;

import com.example.springbootmongo.model.Mobile;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MobileRepository extends MongoRepository<Mobile,String> {

}
