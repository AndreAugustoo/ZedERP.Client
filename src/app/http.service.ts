import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IContent } from './features/product/interfaces/content';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = "https://localhost:7162";
  http = inject(HttpClient);
  constructor() { }

  getAllProduct(){
    return this.http.get<IContent[]>(this.apiUrl + "/api/Products");
  }
}
