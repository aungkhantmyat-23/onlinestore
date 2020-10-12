package com.shop.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shop.entity.Product;
import com.shop.service.ProductService;

@RestController
@RequestMapping("/products")
public class ProductApi {

	@Autowired
	private ProductService service;
	
	@PostMapping
	public Product save(@RequestBody Product product) {
		return service.save(product);
	}
	
	@GetMapping
	public List<Product> findAll(){
		return service.findAll();
	}
	
	@GetMapping("{id}")
	public Product findById(@PathVariable int id) {
		return service.findById(id);
	}
}
