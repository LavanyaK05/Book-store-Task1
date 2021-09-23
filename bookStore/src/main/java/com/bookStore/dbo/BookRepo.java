package com.bookStore.dbo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.bookStore.model.Book;

public interface BookRepo extends JpaRepository<Book, Integer> {

}
