import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){}
  title = 'Angular İlk Deneme';
  deneme=5;
  laptops=[
    {id:1,brand:"Asus",model:"X250-F",processor:"Intel i3 12065",ram:"16 GB",price:9350},
    {id:2,brand:"Asus",model:"X260-H",processor:"Intel i5 12150",ram:"16 GB",price:9980},
    {id:3,brand:"HP",model:"15-TF3",processor:"Intel i3 11065",ram:"8 GB",price:12500},
    {id:4,brand:"Lenovo",model:"LP3-A5",processor:"Intel i3 12650",ram:"24 GB",price:19000},
    {id:5,brand:"HP",model:"15-TF7",processor:"Intel i7 12700H",ram:"24 GB",price:27300}
  ]
}
