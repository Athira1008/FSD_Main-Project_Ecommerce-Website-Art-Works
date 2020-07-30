import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import { ProductModel } from '../product-list/product.model';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-all-products-view',
  templateUrl: './all-products-view.component.html',
  styleUrls: ['./all-products-view.component.css']
})
export class AllProductsViewComponent implements OnInit {
  products: ProductModel[];
  constructor(private productService: ProductService,private router:Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    });
  }

}
