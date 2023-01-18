import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  laptops=[
    {id:1,brand:"Asus",model:"X250-F",processor:"Intel i3 12065",ram:"16 GB",price:9350,image:"asus-1.png"},
    {id:2,brand:"Asus",model:"X260-H",processor:"Intel i5 12150",ram:"16 GB",price:9980,image:"asus-2.png"},
    {id:3,brand:"HP",model:"15-TF3",processor:"Intel i3 11065",ram:"8 GB",price:12500,image:"hp-1.jpg"},
    {id:4,brand:"Lenovo",model:"LP3-A5",processor:"Intel i3 12650",ram:"24 GB",price:19000,image:"lenovo-1.jpg"},
    {id:5,brand:"HP",model:"15-TF7",processor:"Intel i7 12700H",ram:"24 GB",price:27300,image:"hp-2.png"}
  ];

  markalar=["Asus","HP","Lenova","Acer","MSI","Monster","Dell","Casper"];

}
