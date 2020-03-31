package com.example.springbootmongo.controller;

import com.example.springbootmongo.model.Mobile;
import com.example.springbootmongo.model.Registration;
import com.example.springbootmongo.service.MobileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins ="*")
public class MobileController {

    @Autowired
    private MobileService mobileService;

    @RequestMapping("/mobile")
    public String mobile(@RequestParam String brand,@RequestParam String title,@RequestParam String price,@RequestParam String desc,@RequestParam String imglink)
    {
        Mobile m= mobileService.mobile(brand,title,price,desc,imglink);
        return m.toString();
    }
    @RequestMapping("/getallmobile")
    public List<Mobile> getAllMobiles(){
        return mobileService.getAll();
    }
}
