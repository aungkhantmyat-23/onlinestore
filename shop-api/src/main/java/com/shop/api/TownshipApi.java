package com.shop.api;

import com.shop.entity.Division;
import com.shop.entity.Township;
import com.shop.service.TownshipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/townships")
public class TownshipApi {

    @Autowired
    private TownshipService service;

    @GetMapping
    public List<Township> findAll(){
        return service.findAll();
    }

}
