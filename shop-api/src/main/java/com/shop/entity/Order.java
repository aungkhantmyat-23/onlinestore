package com.shop.entity;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;

public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    private Member owner;
    @CreationTimestamp
    private LocalDateTime orderDate;
    @ManyToOne
    private Division division;
    @ManyToOne
    private Township township;
}
