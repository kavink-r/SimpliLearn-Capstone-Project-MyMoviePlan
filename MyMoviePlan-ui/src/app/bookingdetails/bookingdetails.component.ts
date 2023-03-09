import { Component } from '@angular/core';
import { Cart } from 'src/model/cart';
import { CartService } from 'src/service/cart.service';

@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.css']
})
export class BookingdetailsComponent {
  cart:Cart;
  constructor(private cartservice:CartService){}
  ngOnInit(){
    this.cart=this.cartservice.getCart();
  }
}
