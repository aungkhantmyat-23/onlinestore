package com.shop.service;

import com.shop.entity.ActivationKey;
import com.shop.repo.ActivationKeyRepo;
import com.shop.repo.BaseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ActivationKeyService extends BaseService<ActivationKey, String> {

    @Autowired
    private ActivationKeyRepo repo;

    @Override
    protected BaseRepo<ActivationKey,String>repo(){
        return repo;
    }
    public ActivationKey findByAuthKey(String authKey){
        return repo.findByauthKey(authKey);
    }
}
