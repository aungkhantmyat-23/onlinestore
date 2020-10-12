package com.shop.repo;

import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import org.springframework.data.jpa.repository.support.JpaEntityInformation;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;

public class BaseRepoImpl <T, ID> extends SimpleJpaRepository<T, ID> implements BaseRepo<T, ID> {

    private EntityManager em;

    public BaseRepoImpl(JpaEntityInformation<T, ?> entityInformation, EntityManager entityManager) {
        super(entityInformation, entityManager);
        this.em = entityManager;
    }

    @Override
    public List<T> search(String jpql, Map<String, Object> params) {
        TypedQuery<T> query = em.createQuery(jpql, getDomainClass());
        setParameter(query, params);
        return query.getResultList();
    }

    @Override
    public <D> List<D> search(String jpql, Map<String, Object> params, Class<D> type) {
        TypedQuery<D> query = em.createQuery(jpql, type);
        setParameter(query, params);
        return query.getResultList();
    }

    private void setParameter(Query query, Map<String, Object> params) {
        params.forEach(query::setParameter);
    }
}