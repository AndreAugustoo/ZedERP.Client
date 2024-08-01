import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AddProductDto, IGroup, IProduct, IUnit } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  apiUrl = "https://localhost:7162";
  http = inject(HttpClient);
  constructor() { }

  getAllProduct(){
    return this.http.get<IProduct[]>(this.apiUrl + "/api/Products");
  }

  getAllGroup(){
    return this.http.get<IGroup[]>(this.apiUrl + "/api/Groups");
  }

  getAllUnit(){
    return this.http.get<IUnit[]>(this.apiUrl + "/api/Units");
  }

  createProduct(product: AddProductDto){

    return this.http.post(this.apiUrl + "/api/Products", product);
  }

}
