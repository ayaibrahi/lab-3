import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe, NgStyle } from '@angular/common';
import { CreditCardPipePipe } from "../../pipes/credit-card-pipe.pipe";

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss',
    imports: [FormsModule, CommonModule, CreditCardPipePipe]
})
export class ProductsComponent {
  ClientName: string = 'Aya';
  @Input() products: Iproduct[];
  @Output() addToCartEvent = new EventEmitter<Iproduct>();
  filteredproduct:Iproduct[]=[];
  togglepurchase(id:number){
    const product =this.products.find((item)=>item.id===id);
    if(product)
    {
      product.isPurchased=!product.isPurchased;
      product.quantity-=1;
    }
  }
  addToCart(product: Iproduct) {
    // Emit the addToCartEvent with the selected product
    this.addToCartEvent.emit(product);
  }
  constructor(){
    this.products=[
      {
        id: 1,
        name: 'Izor Short Sleeves Buttoned Pique Polo Shirt - Dark Red',
        price: 21500,
        quantity: 5,
        PrdimgURL: '../assets/1 (1).jpg',
        category: "men's clothing",
        Material: 'cotton',
        cardNumber:"123456789125",
        isPurchased:false,
        productInCart:2,
        purchaseDate:new Date(),
      },
      {
        id: 5,
        name: 'Casual Shirt - 100% cotton - standard fit',
        price: 30000,
        quantity: 0,
        PrdimgURL:
          '../assets/1 (3).jpg',
        category: "men's clothing",
        Material: 'cotton',
        cardNumber:"123456789125",
        isPurchased:false,
        productInCart:1,
        purchaseDate:new Date(),
      },
      {
        id: 25,
        name: 'Diadora Men Cotton Polo Shirt',
        price: 14000,
        quantity: 1,
        PrdimgURL:
          '../assets/1 (2).jpg',
        category: "men's clothing",
        Material: 'cotton',
        cardNumber:"123456789125",
        isPurchased:false,
        productInCart:1,
        purchaseDate:new Date(),

      },
      {
        id: 7,
        name: 'Pavone Beige Cole Splatter Pattern Polo Shirt - Black, Mustard & Blue',
        price: 1500,
        quantity: 2,
        PrdimgURL:
          '../assets/1.jpg',
        category:"men's clothing" ,
        Material: 'cotton',
        cardNumber:"123456789125",
        isPurchased:false,
        productInCart:3,
        purchaseDate:new Date(),
      },
      {
        id: 17,
        name: 'BIYLACLESEN Women 3-in-1 Snowboard Jacket Winter Coats',
        price: 1500,
        quantity: 3,
        PrdimgURL:
          'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
        category: "women's clothing",
        Material: '',
        cardNumber:"123456789125",
        isPurchased:false,
        productInCart:1,
        purchaseDate:new Date(),

      },
      {
        id: 9,
        name: 'Lock and Love Women Removable Hooded Leather Moto Jacket',
        price: 1000,
        quantity: 10,
        PrdimgURL:
          'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
        category: "women's clothing",
        Material: 'cotton',
        cardNumber:"123456789125",
        isPurchased:true,
        productInCart:1,
        purchaseDate:new Date(),

      },
      {
        id: 10,
        name: 'Rain Jacket Windbreaker Striped Climbing Raincoats',
        price: 13000,
        quantity: 10,
        PrdimgURL:
          'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
        category: "women's clothing",
        Material: 'cotton',
        cardNumber:"123456789125",
        isPurchased:false,
        productInCart:1,
        purchaseDate:new Date(),

      },
      {
        id: 15,
        name: 'MBJ Womens Solid Short Sleeve Striped Boat Neck V',
        price: 36999,
        quantity: 4,
        PrdimgURL:
          'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
        category: "women's clothing",
        Material: 'cotton',
        cardNumber:"123456789125",
        isPurchased:true,
        productInCart:1,
        purchaseDate:new Date(),

      },
      {
        id: 55,
        name: 'DANVOUY Womens T Shirt Casual Cotton Striped Short',
        price: 36999,
        quantity: 3,
        PrdimgURL:'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
        category: "women's clothing",
        Material: 'cotton',
        cardNumber:"123456789125",
        isPurchased:false ,
        productInCart:1,
        purchaseDate:new Date(),
      }
    ];
    this.filteredproduct=this.products;
  }
  @Input() set filteredproducts(value:string)
{
  this.filteredproduct=this.filterSelectedProduct(value);
}
filterSelectedProduct(value:string){
  if (value==='all')
  {
    return this.products;
  }else{
    return this.products.filter((product:Iproduct)=>product.category===value);
  }
}

}
