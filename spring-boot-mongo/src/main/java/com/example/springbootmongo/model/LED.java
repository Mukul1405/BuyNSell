package com.example.springbootmongo.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class LED {

    @org.springframework.data.annotation.Id
    String Id;

    private String title;
    private String desc;
    private String price;
    private String imglink;

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


    public String getImglink() {
        return imglink;
    }

    public void setImglink(String imglink) {
        this.imglink = imglink;
    }

    public LED(String title, String desc, String price, String imglink) {
        this.title = title;
        this.desc = desc;
        this.price = price;
        this.imglink = imglink;
    }



}
