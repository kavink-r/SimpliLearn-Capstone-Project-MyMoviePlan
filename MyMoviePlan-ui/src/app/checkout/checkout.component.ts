import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/model/cart';
import { cartitem } from 'src/model/cartitem';
import { CartService } from 'src/service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cart:Cart = new Cart();
  cardnumber:number;
  cvv:number;
  cardname:string;
  constructor(private cartservice:CartService, private router:Router){}
  ngOnInit(){
    this.cart = this.cartservice.getCart();
  }
  removefromcart(itm:cartitem){
    this.cartservice.removeFromCart(itm.movie.movieId);
  }
  pay(){
    const response = confirm("Confirm your purchase of "+this.cart.totalprice+ " INR for the movie tickets ?");
    if(response){
      alert("Payment Successful");
      this.router.navigateByUrl("bookingdetails")
    }else{
      alert("Payment Aborted");
    }

  }
}
