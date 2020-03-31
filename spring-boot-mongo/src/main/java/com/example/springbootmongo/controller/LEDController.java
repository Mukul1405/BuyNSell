package com.example.springbootmongo.controller;


import com.example.springbootmongo.model.LED;
import com.example.springbootmongo.model.Laptop;
import com.example.springbootmongo.service.LEDService;
import com.example.springbootmongo.service.LaptopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class LEDController {

    @Autowired
    private LEDService ldService;

    @RequestMapping("/led")
    public String led (@RequestParam String title, @RequestParam String price, @RequestParam String desc,@RequestParam String imglink)
    {
        LED l= ldService.led(title,price,desc,imglink);
        return l.toString();
    }

    @RequestMapping("/getallled")
    public List<LED> getAllMobiles(){
        return ldService.getAll();
    }
}

