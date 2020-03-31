package com.example.springbootmongo.controller;

import com.example.springbootmongo.model.Printer;
import com.example.springbootmongo.service.PrinterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class PrinterController {

    @Autowired
    private PrinterService pService;

    @RequestMapping("/printer")
    public String printer(@RequestParam String title, @RequestParam String price, @RequestParam String desc,@RequestParam String imglink)
    {
        Printer p=pService.printer(title,price,desc,imglink);
        return p.toString();
    }

    @RequestMapping("/getallprinter")
    public List<Printer> getallPrinter(){
        return pService.getAll();
    }
}
