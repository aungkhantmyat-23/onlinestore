package com.shop.service;

import com.shop.entity.Product;
import com.shop.repo.BaseRepo;
import com.shop.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService extends BaseService<Product, Integer> {

	@Autowired
	private ProductRepo repo;

	@Override
	protected BaseRepo<Product,Integer> repo(){
		return repo;
	}

	@Override
	public List<Product> findAll() {
		return repo.findAll(Sort.by(Sort.Direction.DESC, "id"));
	}

	public void deleteById(int id){
		repo.deleteById(id);
	}
}
