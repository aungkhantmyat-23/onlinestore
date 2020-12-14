package com.shop.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import javax.persistence.*;
import lombok.Data;

@Entity
@Data
public class Product implements Serializable{

    private static final long serialVersionUID =1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String category;
    private int quantity;
    private int price;
    @ElementCollection
    private List<String> sizes;
    @Lob
    private String description;
    @ElementCollection
    private List<String> photo = new ArrayList<>();
    @ElementCollection
    private Map<String, String> others;
}
