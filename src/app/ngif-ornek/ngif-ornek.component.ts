import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../Model';

@Component({
  selector: 'app-ngif-ornek',
  templateUrl: './ngif-ornek.component.html',
  styleUrls: ['./ngif-ornek.component.css'],
})
export class NgifOrnekComponent implements OnInit {
  showDetail: boolean = false;
  mdl: Array<ProductModel>;
  detayoge: ProductModel;
  show: string = 'liste';
  showSpinner: boolean = true;

  constructor(private router:Router) {}

  ngOnInit(): void {
    this.mdl = [
      new ProductModel(
        17,
        'Asus',
        'X250-C',
        'Intel i3 12065',
        '16 GB',
        9350,
        'asus-1.png'
      ),
      new ProductModel(
        21,
        'Asus',
        'X260-H',
        'Intel i5 12150',
        '16 GB',
        9980,
        'asus-2.png'
      ),
      new ProductModel(
        24,
        'HP',
        '15-TF3',
        'Intel i3 11065',
        '8 GB',
        12500,
        'hp-1.jpg'
      ),
      new ProductModel(
        43,
        'Lenovo',
        'LP3-A5',
        'Intel i3 12650',
        '24 GB',
        19000,
        'lenovo-1.jpg'
      ),
      new ProductModel(
        51,
        'HP',
        '15-TF7',
        'Intel i7 12700H',
        '24 GB',
        27300,
        'hp-2.png'
      ),
    ];

    setTimeout(() => {
      this.showSpinner = false;
    }, 3000);
  }
  detaygoster() {
    this.showDetail = true;
    this.router.navigate(['/ogrenci-detay'])
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
