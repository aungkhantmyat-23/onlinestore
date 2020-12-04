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
		var products = service.findAll();
		products.sort(new Comparator<Product>() {
			@Override
			public int compare(Product p1, Product p2) {

				if (p1.getId() == p2.getId()) {

					return 0;

				}
				else if (p1.getId() > p2.getId()){

					return -1;
				}
				else {
					return 1;
				}
			}

		});
		return products;
	}

	
	@GetMapping("{id}")
	public Product findById(@PathVariable int id) {
		return service.findById(id);
	}

}
