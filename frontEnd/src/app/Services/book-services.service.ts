import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookServicesService {

  public baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  addBook(body) {
    return this.http.post<any>(this.baseUrl + '/addBook', body);
  }
}
