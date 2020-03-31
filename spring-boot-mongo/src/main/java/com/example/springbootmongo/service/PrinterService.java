package com.example.springbootmongo.service;


import com.example.springbootmongo.model.Printer;
import com.example.springbootmongo.repository.PrinterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PrinterService {

    @Autowired
    private PrinterRepository printerRepository;

    public Printer printer(String title, String price, String desc,String imglink)
    {
        Object save=printerRepository.save(new Printer(title, desc, price, imglink));
        return (Printer)save;
    }
    public List<Printer> getAll()
    {
        return printerRepository.findAll();
    }
}
