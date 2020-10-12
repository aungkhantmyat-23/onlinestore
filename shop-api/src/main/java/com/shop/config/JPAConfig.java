package com.shop.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.shop.repo.BaseRepoImpl;

@Configuration
@EnableJpaRepositories(basePackages = "com.shop.repo",repositoryBaseClass = BaseRepoImpl.class)
public class JPAConfig {

}
