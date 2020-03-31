package com.example.springbootmongo.service;

import com.example.springbootmongo.model.Mobile;
import com.example.springbootmongo.repository.MobileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MobileService {

    @Autowired
    private MobileRepository mobileRepository;

    public Mobile mobile(String brand, String title, String price, String desc, String imglink) {
        Object save=mobileRepository.save(new Mobile(brand, title, desc, price, imglink));
        return (Mobile)save;
    }
    public List<Mobile> getAll()
    {
        return mobileRepository.findAll();
    }
}
