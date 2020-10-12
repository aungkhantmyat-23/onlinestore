package com.shop.common;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

@RestControllerAdvice
public class ApiExceptionHandler {
   // @ExceptionHandler(ApplicationException.class)
    public ResponseEntity<ErrorResponse> catchException(Exception ex, WebRequest webRequest){
        return new ResponseEntity<>(new ErrorResponse(),
                HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
