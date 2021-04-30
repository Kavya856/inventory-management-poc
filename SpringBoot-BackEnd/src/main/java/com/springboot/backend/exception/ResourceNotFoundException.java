package com.springboot.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


//Whenever a record do not exist in DB,then rest api throws this exception to client
@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
	
	private static final long serialVersionUID=1L;
	public ResourceNotFoundException(String message) {
		super(message);
	}

}
