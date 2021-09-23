import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './MyComponent/books/books.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookService } from './book.service';
// import { AddBookComponent } from './MyComponent/add-book/add-book.component';
// import { GetBookComponent } from './MyComponent/get-book/get-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    // AddBookComponent,
    // GetBookComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    // BrowserAnimationsModule,
    // MatFormFieldModule  
    // MatFormFieldModule,
    // MatInputModule,

  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
