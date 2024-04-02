import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../../../models/book';
import { BookServiceService } from '../../services/bookService.service';
import { ResponseModel } from '../../../models/responseModel';

@Component({
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements OnInit{
  bookList:Book[] = [];
  today: Date = new Date();
  searchKey : string = ' ';
  constructor(private bookService : BookServiceService){}
  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.bookService.getAll().subscribe({
      next:(response:ResponseModel<Book>)=>{
        console.log('backendden cevap geldi:',response);
        this.bookList = response.items;
      },
      error : (error) =>{
        console.log('backendden hatalı cevap geldi.',error);
      },
      complete: () =>{
        console.log('backend isteği sonlandı.');
      }
    });
  }
}
