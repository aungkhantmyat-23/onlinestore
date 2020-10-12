package com.shop.entity;


import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Data;

@Entity
@Table(name = "MEMBER_TBL")
@Data
public class Member implements Serializable{
	 private static final long serialVersionUID = 1L;

	    @Id
	    private String email;
	    private String username;
	    @JsonProperty(access = Access.WRITE_ONLY)
	    private String password;
	    private boolean enable;
	    @Enumerated(EnumType.STRING)
	    private Role role;

	    public Member() {
	        this.role = Role.Member;
	    }

	    public enum Role{
	        Admin, Member
	    }

	    @Override
	    public String toString() {
	        return String.format("{'email' : %s, 'username': %s, 'role': %s}", email, username, role);
	    }
}
