import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';



// const baseUrl = 'http://localhost:8090/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  private getbooks_url = "http://localhost:8090/books";
  // createBook(data: Book): Observable<any> {
  //   return this.http.post(baseUrl, data);
  // }

  // getAllBook() :Observable<Book[]>
  // {
  //   return this.http.get<Book[]>(baseUrl);
  // }

  public addBook(book: Book){
    return this.http.post("http://localhost:8090/addBook",book,{responseType:'text' as 'json'});
  }

  // public getBook(){
  //   return this.http.get("http://localhost:8090/books");
  // }

  getBook(): Observable<Book[]>
  {
    return this.http.get<Book[]>(this.getbooks_url)
  }
}
