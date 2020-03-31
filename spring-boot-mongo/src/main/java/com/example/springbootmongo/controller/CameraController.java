package com.example.springbootmongo.controller;

import com.example.springbootmongo.model.Camera;
import com.example.springbootmongo.service.CameraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class CameraController {

    @Autowired
    private CameraService camerService;

    @RequestMapping("/camera")
    public String camera(@RequestParam String brand,@RequestParam String title, @RequestParam String price, @RequestParam String desc,@RequestParam String imglink)
    {
        Camera c=camerService.camera(brand,title,price,desc,imglink);
        return c.toString();
    }

    @RequestMapping("/findallcamera")
    public List<Camera> getAll()
    {
        return camerService.getallcamera();
    }
}
