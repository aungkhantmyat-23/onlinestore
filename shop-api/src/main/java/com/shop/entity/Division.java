package com.shop.entity;

import java.io.Serializable;

import javax.persistence.*;

import lombok.Data;
@Entity
@Data
public class Division implements Serializable{

	 private static final long serialVersionUID = 1L;

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Integer id;
	    private String name;
}
