package com.shop.service;

import com.shop.entity.Product;
import com.shop.repo.BaseRepo;
import com.shop.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService extends BaseService<Product, Integer> {

	@Autowired
	private ProductRepo repo;

	@Override
	protected BaseRepo<Product,Integer> repo(){
		return repo;
	}

}
