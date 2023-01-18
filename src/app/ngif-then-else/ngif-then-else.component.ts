import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel2 } from '../Model';


@Component({
  selector: 'app-ngif-then-else',
  templateUrl: './ngif-then-else.component.html',
  styleUrls: ['./ngif-then-else.component.css']
})
export class NgifThenElseComponent implements OnInit {
  showDetail: boolean = false;
  mdl: Array<ProductModel2>;
  detayoge: ProductModel2;
  show: string = 'liste';
  showSpinner: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.mdl = [
      new ProductModel2(
      17,
        'Asus',
        'X250-C',
        'Intel i3 12065',
        '16 GB',
        9350,
        'asus-1.png',true,5
      ),
      new ProductModel2(
        21,
        'Asus',
        'X260-H',
        'Intel i5 12150',
        '16 GB',
        9980,
        'asus-2.png',false,12
      ),
      new ProductModel2(
        24,
        'HP',
        '15-TF3',
        'Intel i3 11065',
        '8 GB',
        12500,
        'hp-1.jpg',false,15
      ),
      new ProductModel2(
        43,
        'Lenovo',
        'LP3-A5',
        'Intel i3 12650',
        '24 GB',
        0,
        'lenovo-1.jpg',false,7
      ),
      new ProductModel2(
        51,
        'HP',
        '15-TF7',
        'Intel i7 12700H',
        '24 GB',
        27300,
        'hp-2.png',true,2
      ),
    ];



    setTimeout(() => {
      this.showSpinner = false;
    }, 3000);
  }
  detaygoster() {
    this.showDetail = true;
   
  }
  detaygizle() {
    this.showDetail = false;
  }
  detayGoster(id: number) {
    this.show = 'detay';

    for (let m of this.mdl) {
      if (m.id == id) {
        this.detayoge = m;
      }
    }
  }
  geri() {
    this.show = 'liste';
  }
}
