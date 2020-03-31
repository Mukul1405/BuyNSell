package com.example.springbootmongo.repository;

import com.example.springbootmongo.model.Camera;
import com.example.springbootmongo.model.Printer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CameraRepository extends MongoRepository<Camera,String> {

}
