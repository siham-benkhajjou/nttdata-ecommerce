import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Products } from '../../interfaces/product.interface';
import { productService } from '../../service/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    productList:Products[]=[];
    productSubscription:Subscription|undefined;
  constructor(private productService:ProductService) {
   }

  ngOnInit(): void {
    this.productSubscription=this.productService.getlimitProduct().subscribe(
      (data:any)=>{this.productList=data.products
       console.log(this.productList)}
    )

  }

}
