import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../models/book';
import { ResponseModel } from '../../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient:HttpClient) { }
  apiUrl:string = "http://localhost:60805/api/Books";
  getAll():Observable<ResponseModel<Book>>{
      return this.httpClient.get<ResponseModel<Book>>(
        this.apiUrl+'?PageIndex=0&PageSize=10'
      );
  }

  add(book:Book):Observable<any>{
    const token = localStorage.getItem('Token'); 
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.httpClient.post<any>(this.apiUrl,book,{headers:headers})
  }
}
