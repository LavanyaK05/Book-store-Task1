package com.bookStore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bookStore.dbo.BookRepo;
import com.bookStore.model.Book;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BookController {
	
	@Autowired
	BookRepo repo;
	
//	@RequestMapping("/")
//	public String home() {
//		return "home.jsp";
//	}
	
	@PostMapping("/addBook")
	public String addBook(@RequestBody Book book)
	{
	    repo.save(book);
		System.out.println(book);
	    return "Book added sussefully";   
		//return "home.jsp";
	}
	
	
	@RequestMapping("/books")
	@ResponseBody
	public List<Book> getBooks()
	{
		return repo.findAll();
	}

}
