package com.example.springbootmongo.controller;


import com.example.springbootmongo.model.Laptop;
import com.example.springbootmongo.service.LaptopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins ="*")
public class LaptopController {

    @Autowired
    private LaptopService lService;

    @RequestMapping("/laptop")
    public String laptop(@RequestParam String brand, @RequestParam String title, @RequestParam String price, @RequestParam String desc,@RequestParam String imglink)
    {
        Laptop l= lService.laptop(brand,title,price,desc,imglink);
        return l.toString();
    }

    @RequestMapping("/getalllaptops")
    public List<Laptop> getAllMobiles(){
        return lService.getAll();
    }
}
