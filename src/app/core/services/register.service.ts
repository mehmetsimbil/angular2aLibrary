import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient : HttpClient) { }
  
  apiUrl: string = "http://localhost:60805/api/Auth/Register";

  Register(registerModel:Register):Observable<any>{
  
 
    return this.httpClient.post<any>(this.apiUrl,registerModel);
  }
}
