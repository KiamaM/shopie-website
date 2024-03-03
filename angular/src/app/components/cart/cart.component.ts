import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductServiceService } from '../../../Services/product-service.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  productsArray:any[] = []
  totalPrice:any = 0  
  productTitle:string = 'New Oleato Golden FoamTM Iced Shaken Espresso with Toffeenut'
  price:string = 'Ksh 310'

  constructor(private productService:ProductServiceService){
    this.fetchProducts()
  }

  fetchProducts(){
    this.productService.getAllProducts().subscribe(res=>{
      this.productsArray = res.products

     this.totalPrice = 0;
      this.productsArray.forEach(product => {
        this.totalPrice += product.salePrice;
      });
      return this.totalPrice;
    })
  }


}
