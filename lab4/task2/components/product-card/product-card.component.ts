import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="border:1px solid red; padding:10px; margin:10px;">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <b>{{ product.price }}</b>
    </div>
  `
})
export class ProductCardComponent {
  @Input() product: any;
}
