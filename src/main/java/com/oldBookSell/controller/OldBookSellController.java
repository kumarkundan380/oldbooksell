package com.oldBookSell.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.oldBookSell.dto.OldBookSellDTO;
import com.oldBookSell.service.OldBookSellServices;



@RestController
@RequestMapping
public class OldBookSellController {
	
		@Autowired
		OldBookSellServices oldBookSellServices;
		
		@GetMapping("/hello")
		public  void hello() {
			System.out.println("hello world.........");
		}
		
		@RequestMapping("/add")
		public OldBookSellDTO createUser(@RequestBody OldBookSellDTO userDetail) {
			return  oldBookSellServices.createUser(userDetail);
		}
}
