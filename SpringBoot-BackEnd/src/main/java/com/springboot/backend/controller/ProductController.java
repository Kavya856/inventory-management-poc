package com.springboot.backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.backend.exception.ResourceNotFoundException;
import com.springboot.backend.model.Product;
import com.springboot.backend.repository.ProductRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ProductController {
	
	@Autowired
	private ProductRepository productRepository;
	
	//get All products
	@GetMapping("/products")
	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}
	
	//create product rest api
	@PostMapping("/products")
	public Product createProduct(@RequestBody Product product) {
		 productRepository.save(product);
		 return product;
	}
	
	//get product by id rest api
	@GetMapping("/products/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable long id) {
		Product product=productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :"+id));
		
		return ResponseEntity.ok(product);
	}
	
	//update Employee rest api
	@PutMapping("/products/{id}")
	public ResponseEntity<Product> updateProduct(@PathVariable long id,@RequestBody Product productDetails){
		Product product=productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :"+id));
		product.setProdName(productDetails.getProdName());
		product.setProdPrice(productDetails.getProdPrice());
		Product updatedProduct=productRepository.save(product);
		return ResponseEntity.ok(updatedProduct);
	}
	
	// delete employee rest api
		@DeleteMapping("/products/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable long id){
			Product product = productRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));
			
			productRepository.delete(product);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}
