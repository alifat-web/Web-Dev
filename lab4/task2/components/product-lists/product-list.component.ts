import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <p>PRODUCT LIST WORKS</p>

    <app-product-card
      *ngFor="let p of products"
      [product]="p">
    </app-product-card>
  `
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: 'TEST',
      description: 'TEST DESC',
      price: 100,
      rating: 5,
      image: 'https://via.placeholder.com/200',
      link: '#'
    }
  ];
}
