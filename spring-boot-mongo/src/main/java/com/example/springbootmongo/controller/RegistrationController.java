package com.example.springbootmongo.controller;


import com.example.springbootmongo.model.Registration;
import com.example.springbootmongo.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins ="*")
public class RegistrationController {

    @Autowired
    private RegistrationService rService;

    @RequestMapping("/register")
    public String register(@RequestParam String fname,@RequestParam String lname,@RequestParam String bdate,@RequestParam String email,@RequestParam String password,@RequestParam String gender,@RequestParam String address,@RequestParam String pno)
    {
        Registration r= rService.register(fname, lname, bdate, email, password, gender, address, pno);
        return r.toString();
    }
//
//    @RequestMapping("/get")
//    public Person getPerson(@RequestParam String firstName)
//    {
//        return personService.findByFirstName(firstName);
//    }

    @RequestMapping("/getallreg")
    public List<Registration> getAllPerson(){
        return rService.getAll();
    }


    }
