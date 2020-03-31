package com.example.springbootmongo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Registration {

    @Id
    String id;

    private String fname, lname,bdate,email,password,gender,address;
    private String pno;

    public Registration(String fname, String lname, String bdate, String email, String password, String gender, String address, String pno) {
        this.fname = fname;
        this.lname = lname;
        this.bdate = bdate;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.address = address;
        this.pno = pno;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getBdate() {
        return bdate;
    }

    public void setBdate(String bdate) {
        this.bdate = bdate;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPno() {
        return this.pno;
    }

    public void setPno(String pno) {
        this.pno = pno;
    }
}
