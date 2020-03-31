package com.example.springbootmongo.service;

import com.example.springbootmongo.model.Registration;
import com.example.springbootmongo.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistrationService {
    @Autowired
    private RegistrationRepository registrationRepository;

    public Registration register(String fname, String lname, String bdate, String email, String password, String gender, String address, String pno)
    {
        Object save = registrationRepository.save(new Registration(fname, lname, bdate, email, password, gender, address, pno));
        return (Registration) save;
    }

    //retrieve operation
    public List<Registration> getAll()
    {
        return registrationRepository.findAll();
    }


}
