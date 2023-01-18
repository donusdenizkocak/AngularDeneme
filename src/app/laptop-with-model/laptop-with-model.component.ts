import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../Model';


@Component({
  selector: 'app-laptop-with-model',
  templateUrl: './laptop-with-model.component.html',
  styleUrls: ['./laptop-with-model.component.css']
})
export class LaptopWithModelComponent implements OnInit {
 mdl: Array<ProductModel>   //Product model dizisini oluşturuyor
  constructor() { }

  ngOnInit(): void {
    
    this.mdl= [
      new ProductModel(1,"Asus","X250-C","Intel i3 12065","16 GB",9350,"asus-1.png"),
      new ProductModel(2,"Asus","X260-H","Intel i5 12150","16 GB",9980,"asus-2.png"),
      new ProductModel(3,"HP","15-TF3","Intel i3 11065","8 GB",12500,"hp-1.jpg"),
      new ProductModel(4,"Lenovo","LP3-A5","Intel i3 12650","24 GB",19000,"lenovo-1.jpg"),
      new ProductModel(5,"HP","15-TF7","Intel i7 12700H","24 GB",27300,"hp-2.png")
    ];
  }

}
