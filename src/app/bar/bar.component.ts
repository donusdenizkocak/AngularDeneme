import { Component, OnInit } from '@angular/core';
import { takim } from '../Model';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  takimlar:Array<takim>
  toplam:number=0;
  constructor() { }

  ngOnInit(): void {
     this.takimlar = [
      new takim("Galatasaray",85000,0),
      new takim("Fenerbahçe",75000,0),
      new takim("Beşiktaş", 58000,0),
      new takim("Trabzonspor",45000,0),
      new takim("Gençlerbirliği",24000,0),
      new takim("Bursaspor",32000,0)
     ]

     for(let tkm of this.takimlar){
      this.toplam += tkm.taraftar;
    }
   for(let tkm of this.takimlar){
    let yuzdelik = (tkm.taraftar/this.toplam*1000).toFixed(1);
    tkm.yuzde = Number(yuzdelik);
   }
  }
  product={
    id:1,
    name:'ipone 15',
    price:20000,
    imageUrl:"hp-1.jpg",
    description:"iyi telefon",
    isActive:true
  }
  products1=["ipone 12","ipone 13","ipone 17","ipone 16"]
  products =[{
    id:1,
    name:'ipone 14',
    price:18000,
    imageUrl:"hp-1.jpg",
    description:"iyi telefon",
    isActive:true
  },
  {
    id:1,
    name:'ipone 15',
    price:20000,
    imageUrl:"asus-1.png",
    description:"bu da iyi telefon",
    isActive:true
  },
  {
    id:1,
    name:'ipone 16',
    price:30000,
    imageUrl:"hp-2.png",
    description:"bu iyi telefon",
    isActive:true
  }

  ]

 private products2:any[] =[
    {id:1,name:'ipone 23',price:18000,imageUrl:"hp-1.jpg",description:"iyi telefon",isActive:false},
    {id:2,name:'ipone 24',price:18000,imageUrl:"hp-2.png",description:"iyi telefon",isActive:true},
    {id:3,name:'ipone 25',price:18000,imageUrl:"lenovo-1.jpg",description:"iyi telefon",isActive:true}
  ];

  getProducts2(){
    return this.products2.filter(p=>p.isActive);
  }
}
//     for(let sts of this.satislar){
//       //o aydaki satışın yüzdesi
//       let yuzdelik = (sts.satis / this.toplam *100*20).toFixed(1);
//       sts.yuzde = Number(yuzdelik);
//     }
//     console.log(this.satislar);
//   }

// }