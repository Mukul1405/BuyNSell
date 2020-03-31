package com.example.springbootmongo.service;

import com.example.springbootmongo.model.Registration;
import com.example.springbootmongo.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private RegistrationRepository registrationRepository;

    public Registration findByEmailAndPassword(String email, String password) {
        Registration r=registrationRepository.findByEmailAndPassword(email,password);
        if(r==null)
        {
            return null;
        }
        else
            return r;
    }
}
