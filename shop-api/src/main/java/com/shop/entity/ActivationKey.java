package com.shop.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
public class ActivationKey implements Serializable {
    private static final long serialVersionUID =1L;

    @Id
    private String email;
    private String authKey;
    @CreationTimestamp
    private LocalDateTime creationTime;

    @OneToOne
    @JoinColumn(name = "email", insertable = false,updatable = false)
    private Member member;

    public ActivationKey(Member member){
        this.email = member.getEmail();
        this.authKey = UUID.randomUUID().toString();
        this.creationTime=LocalDateTime.now();
    }
    public boolean isExpire(){
        return this.creationTime.plusMinutes(10).compareTo(LocalDateTime.now().minusMinutes(10))<= 0;
    }
}
