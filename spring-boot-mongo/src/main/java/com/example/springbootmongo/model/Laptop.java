package com.example.springbootmongo.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Laptop {

    @Id
    String id;

    private String brand;

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    private String title;


    public String getImglink() {
        return imglink;
    }

    public void setImglink(String imglink) {
        this.imglink = imglink;
    }

    private String imglink;
    private String desc;
    private String price;


    public Laptop(String brand, String title, String imglink, String desc, String price) {
        this.brand = brand;
        this.title = title;
        this.imglink = imglink;
        this.desc = desc;
        this.price = price;
    }
}
