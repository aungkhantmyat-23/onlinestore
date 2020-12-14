package com.shop.service;

import java.util.List;

import com.shop.repo.BaseRepo;

public abstract class BaseService<T, ID> {

	protected abstract BaseRepo<T, ID> repo();

	public T save(T t) {
		return repo().save(t);
	}

	public List<T> findAll(){
		return repo().findAll();
	}
	public T findById(ID id){
		return repo().getOne(id);
	}

}
