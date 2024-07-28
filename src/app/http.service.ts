import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProduct } from './features/product/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = "https://localhost:7162";
  http = inject(HttpClient);
  constructor() { }

  getAllProduct(){
    return this.http.get<IProduct[]>(this.apiUrl + "/api/Products");
  }

  createProduct(product:IProduct){
    return this.http.post(this.apiUrl + "/api/Products", product);
  }
}
