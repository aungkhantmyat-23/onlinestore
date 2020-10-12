package com.shop.common;

import java.time.LocalDateTime;

public class ErrorResponse {
    private LocalDateTime timestamp;
    private long status;
    private String error;
    private String message;
    private String path;
}
