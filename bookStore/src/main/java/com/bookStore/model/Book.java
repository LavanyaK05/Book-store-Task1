package com.bookStore.model;

//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//import lombok.ToString; 
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//@ToString
//@Table(name="USER_REG_TBL")

public class Book {
	
	@Id
//	@GeneratedValue
	private String bname;
	private String bauthor;
	private int bprice;
	private String bdate;
	public String getBname() {
		return bname;
	}
	public void setBname(String bname) {
		this.bname = bname;
	}
	public String getBauthor() {
		return bauthor;
	}
	public void setBauthor(String bauthor) {
		this.bauthor = bauthor;
	}
	public int getBprice() {
		return bprice;
	}
	public void setBprice(int bprice) {
		this.bprice = bprice;
	}
	public String getBdate() {
		return bdate;
	}
	public void setBdate(String bdate) {
		this.bdate = bdate;
	}
	@Override
	public String toString() {
		return "Book [bname=" + bname + ", bauthor=" + bauthor + ", bprice=" + bprice + ", bdate=" + bdate + "]";
	}
	
	

}
