package com.example.springbootmongo.repository;

import com.example.springbootmongo.model.Printer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrinterRepository extends MongoRepository<Printer,String> {
}
