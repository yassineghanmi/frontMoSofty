import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  product: Product = {
    idProduct: 0,
    name: '',
    price: 0,
    basePrice: 0,
    description: '',
    alt: '',
    createdDate: '',
    lastModifiedDate: '',
  };

  productId!: number;

  constructor(
    private restService: RestApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.router.routerState.snapshot.url.includes('/update-product')) {
      console.log('yes');
      this.productId = this.route.snapshot.params['id'];
      this.restService
        .getProductById(+this.route.snapshot.params['id'])
        .subscribe((res) => {
          this.product = res;
          console.log(this.product);
        });
    }
  }

  createdDateTime() {
    const createdDate = new Date();
    return this.formatToISODate(createdDate);
  }

  formatToISODate(date: Date): string {
    return date.toISOString();
  }

  saveProduct(formRef: NgForm) {
    console.log(this.product);
    if (this.router.routerState.snapshot.url.includes('/update-product')) {
      // this.product.createdDate = new Date(this.product.createdDate).toISOString();

      this.restService
        .updateProduct(formRef.form.value, this.productId)
        .subscribe(() => alert('Product updated!!'));
    } else {
      this.createdDateTime();
      this.product = {
        ...formRef.form.value,
        createdDate: this.createdDateTime(),
      };
      this.restService
        .addProduct(this.product)
        .subscribe(() => alert('Product added!!'));
    }
  }
}
