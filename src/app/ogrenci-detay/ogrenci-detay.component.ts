import { Component, OnInit } from '@angular/core';
import { ogrenci } from '../Model';

@Component({
  selector: 'app-ogrenci-detay',
  templateUrl: './ogrenci-detay.component.html',
  styleUrls: ['./ogrenci-detay.component.css']
})
export class OgrenciDetayComponent implements OnInit {
  ogr:ogrenci;
  isimler:string[];
  fontboyut:number=24;
  constructor() { }

  ngOnInit(): void {
    this.ogr = new ogrenci(1224,"Bahar Derin","Yıldız",479,"9-C","K",[])
    this.isimler = this.ogr.isim.split(' ');
    this.ogr.isim = "";
    this.isimler.forEach(ism =>{
      this.ogr.isim += ism.substring(0,1) + "... ";
    });
  }
  
  artir(){
    this.fontboyut> 36 ? this.fontboyut=36 : this.fontboyut++;
  }
  azalt(){
    this.fontboyut< 8 ? this.fontboyut=8 : this.fontboyut--;
  }
}
