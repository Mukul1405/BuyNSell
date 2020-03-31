package com.example.springbootmongo.service;

import com.example.springbootmongo.model.Laptop;
import com.example.springbootmongo.repository.LaptopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LaptopService {

    @Autowired
    private LaptopRepository laptopRepository;

    public Laptop laptop( String brand, String title, String price, String desc,String imglink) {
    Object save=laptopRepository.save(new Laptop(brand,title, price,desc,imglink));
    return (Laptop)save;
    }

    public List<Laptop> getAll()
    {
        return laptopRepository.findAll();
    }
}
