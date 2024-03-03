import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  token = localStorage.getItem('token') as string


  constructor(private http:HttpClient) { }

  addToCart(user_id:string, product_id:string){
    return this.http.post<{message:string, error:string}>(`http://localhost:4500/cart/`,{user_id, product_id}, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token,
      })
    })

  }
  readToken(token:string){
    return this.http.get<{info:{user_id: string,first_name:string, last_name:string,email:string}}>('http://localhost:4500/auth/checkdetails', {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token':token
      })
    })
  }

  removeFromCart(id:string){
    return this.http.delete<{message:string, error:string}>(`http://localhost:4500/users/delete/${id}`, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'token': this.token
      })
    })
  }

  
}

