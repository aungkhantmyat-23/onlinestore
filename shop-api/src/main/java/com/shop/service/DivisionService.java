package com.shop.service;

import com.shop.entity.Division;
import com.shop.repo.BaseRepo;
import com.shop.repo.DivisionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DivisionService extends BaseService<Division,Integer> {

    @Autowired
    private DivisionRepo repo;

    @Override
    protected BaseRepo<Division, Integer> repo() {
        return repo;
    }
}
