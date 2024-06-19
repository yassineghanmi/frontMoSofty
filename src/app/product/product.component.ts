import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products!: any[];
  currentDateTime!: string;
  constructor(private restService: RestApiService) {}

  ngOnInit() {
    this.updateDateTime();
    this.restService
      .getProducts()
      .subscribe((results) => (this.products = results));
  }

  updateDateTime() {
    const now = new Date();
    this.currentDateTime = now.toLocaleString();
    setInterval(() => {
      const now = new Date();
      this.currentDateTime = now.toLocaleString();
    }, 1000);
  }

  deleteProduct(productId: any) {
    this.restService.deleteProduct(productId).subscribe((res) => {
      console.log(res);
      this.restService
        .getProducts()
        .subscribe((results) => (this.products = results));
    });
  }
}
