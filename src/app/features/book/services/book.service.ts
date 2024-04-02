import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../../models/book';
import { ResponseModel } from '../../../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<ResponseModel<Book>>{
      return this.httpClient.get<ResponseModel<Book>>(
        'http://localhost:60805/api/Books?PageIndex=0&PageSize=2'
      );
  }
}
