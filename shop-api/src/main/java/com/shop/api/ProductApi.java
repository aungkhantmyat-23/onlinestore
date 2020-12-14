package com.shop.api;

import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

	@GetMapping("{id:\\d+}")
	public Product findById(@PathVariable int id) {
		return service.findById(id);
	}

	@DeleteMapping("{id:\\d+}")
	public void deleteByid(@PathVariable int id){
		service.deleteById(id);
	}

}
