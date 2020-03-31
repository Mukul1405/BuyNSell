package com.example.springbootmongo.service;

import com.example.springbootmongo.model.Camera;
import com.example.springbootmongo.repository.CameraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CameraService {

    @Autowired
    private CameraRepository cameraRepository;

    public Camera camera(String brand,String title, String price, String desc,String imglink)
    {
        Object save=cameraRepository.save(new Camera(brand,title, desc, price,imglink));
        return (Camera)save;
    }
    public List<Camera> getallcamera()
    {
        return cameraRepository.findAll();
    }
}
