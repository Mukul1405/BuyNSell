package com.example.springbootmongo.service;


import com.example.springbootmongo.model.LED;
import com.example.springbootmongo.repository.LEDRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LEDService {

        @Autowired
        private LEDRepository ledRepository;

        public LED led(String title, String price, String desc,String imglink) {
            Object save=ledRepository.save(new LED(title,price,desc, imglink));
            return (LED)save;
        }

        public List<LED> getAll()
        {
            return ledRepository.findAll();
        }
    }

