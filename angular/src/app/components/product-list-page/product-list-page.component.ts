import { Component } from '@angular/core';
import { ProductServiceService } from '../../../Services/product-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-list-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './product-list-page.component.html',
  styleUrl: './product-list-page.component.css'
})
export class ProductListPageComponent {
  productsArray:any[] = []
  productTitle:string = 'New Oleato Golden FoamTM Iced Shaken Espresso with Toffeenut'
  price:string = 'Ksh 310'

  constructor(private productService:ProductServiceService){
    this.fetchProducts()
  }

  fetchProducts(){
    this.productService.getAllProducts().subscribe(res=>{
      this.productsArray = res.products
    })
  }
}
