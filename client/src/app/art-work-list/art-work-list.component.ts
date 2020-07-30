import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import { ProductModel } from '../product-list/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-art-work-list',
  templateUrl: './art-work-list.component.html',
  styleUrls: ['./art-work-list.component.css']
})
export class ArtWorkListComponent implements OnInit {
  products: ProductModel[];
  // imageWidth: number= 100;
  // imageHeight: number= 225;
  constructor(private productService: ProductService,private router:Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    });
  }

}
