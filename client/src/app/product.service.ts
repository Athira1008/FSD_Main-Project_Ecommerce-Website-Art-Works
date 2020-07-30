import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get("http://localhost:3000/product-list/products");
  }
  newProduct(item)
  {
    return this.http.post("http://localhost:3000/product-list/add-product",{"product":item})
    .subscribe(data=>{
      console.log(data)
    });
  }
  deleteProduct(id)
  {
    return this.http.get("http://localhost:3000/product-list/delete/"+id);
    
  }
  editProduct(id)
  {
    return this.http.get("http://localhost:3000/product-list/edit/"+id);
    
  }
  updateProduct(item)
  {
    return this.http.post("http://localhost:3000/product-list/update",{"product":item})
    .subscribe(data=>{
      console.log(data)
    });
  }
}
