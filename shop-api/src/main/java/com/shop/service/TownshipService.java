package com.shop.service;

import com.shop.entity.Township;
import com.shop.repo.BaseRepo;
import com.shop.repo.TownshipRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TownshipService extends BaseService<Township,Integer> {

    @Autowired
    private TownshipRepo repo;

    @Override
    protected BaseRepo<Township, Integer> repo() {
        return repo;
    }
}
