import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-note-product',
  templateUrl: './note-product.component.html',
  styleUrls: ['./note-product.component.css'],
})
export class NoteProductComponent implements OnInit {
  arrayStars: any[] = new Array(5);
  rate: number = 0;
  products!: any[];

  constructor(private restService: RestApiService) {}

  ngOnInit(): void {
    this.restService.getProducts().subscribe((res) => (this.products = res));
  }
  showIndex(index: number) {
    console.log('nice');
    console.log(index);
    this.rate = index;
  }
}
