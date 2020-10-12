package com.shop.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.core.env.Environment;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

public class JWTAuthorizationFilter extends BasicAuthenticationFilter {

    private Environment environment;

    public JWTAuthorizationFilter(AuthenticationManager authenticationManager, Environment environment){
        super(authenticationManager);
        this.environment = environment;
    }
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain chain)
        throws IOException, ServletException{
        String token = request.getHeader(environment.getProperty("jwt.header"));

        if(null == token){
            chain.doFilter(request,response);
            return;
        }
        Authentication authentication = getAuthentication(token);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        chain.doFilter(request,response);
    }

   private Authentication getAuthentication(String token){
        String username = JWT.require(Algorithm.HMAC512(environment.getProperty("jwt.secret").getBytes()))
                .build()
                .verify(token)
                .getSubject();
        if (null != username)
            return new UsernamePasswordAuthenticationToken(
                    username, null,
                    new ArrayList<>()
            );
        return null;
   }
}
