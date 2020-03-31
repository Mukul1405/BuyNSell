package com.example.springbootmongo.controller;

import com.example.springbootmongo.model.Login;
import com.example.springbootmongo.model.Registration;
import com.example.springbootmongo.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins ="*")
public class LoginController {

    @Autowired
    private LoginService loginService;
    private Login l;


    @RequestMapping("/login")
    public Registration getAllEmail(@RequestParam String email, @RequestParam String password)
    {
     Registration r=loginService.findByEmailAndPassword(email,password);
     System.out.println(email+" "+password);
         return r;
    }

}
