package com.example.springbootmongo.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Mobile {

    @Id
    String id;

    private String brand;
    private String title;
    private String desc;
    private String price;
    private String imglink;

    public String getImglink() {
        return imglink;
    }

    public void setImglink(String imglink) {
        this.imglink = imglink;
    }



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
    public Mobile(String brand, String title, String desc, String price, String imglink) {

        this.brand = brand;
        this.title = title;
        this.desc = desc;
        this.price = price;
        this.imglink = imglink;
    }


}
