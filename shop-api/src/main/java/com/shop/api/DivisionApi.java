package com.shop.api;

import com.shop.entity.Division;
import com.shop.service.DivisionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/divisions")
public class DivisionApi {

    @Autowired
    private DivisionService service;

    @GetMapping
    public List<Division> findAll(){
        return service.findAll();
    }

}
