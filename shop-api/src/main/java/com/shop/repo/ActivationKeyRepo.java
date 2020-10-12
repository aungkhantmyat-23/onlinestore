package com.shop.repo;

import com.shop.entity.ActivationKey;

public interface ActivationKeyRepo extends BaseRepo<ActivationKey, String>{
    ActivationKey findByauthKey(String authKey);
}
