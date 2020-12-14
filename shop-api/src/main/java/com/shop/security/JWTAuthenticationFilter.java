package com.shop.security;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.shop.entity.Member;
import org.springframework.core.env.Environment;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;


public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private AuthenticationManager authenticationManager;
    private Environment environment;

    public JWTAuthenticationFilter(AuthenticationManager authenticationManager, Environment environment){
        this.authenticationManager=authenticationManager;
        this.environment = environment;
    }

    @Override
    public Authentication attemptAuthentication(
            HttpServletRequest request,
            HttpServletResponse response)
            throws AuthenticationException {
        try {
            Member member = new ObjectMapper().readValue(
                    request.getInputStream(),Member.class
            );
            return authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            member.getEmail(),
                            member.getPassword(),
                            new ArrayList<>())
            );
        } catch (IOException e){
            throw new RuntimeException(e);
        }
    }
    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication auth)
            throws IOException, ServletException{
        User user =(User)auth.getPrincipal();

        String token = JWT.create()
                .withSubject(user.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + Long.parseLong(environment.getProperty("jwt.expire"))))
                .sign(Algorithm.HMAC512(environment.getProperty("jwt.secret").getBytes()));

        response.setHeader("Access-Control-Expose-Headers", "Authorization,user,role");
        response.setHeader("user",user.getUsername());
        response.setHeader("role",user.getAuthorities().stream().findFirst().get().getAuthority());
        response.setHeader(environment.getProperty("jwt.header"),token);
    }
}
