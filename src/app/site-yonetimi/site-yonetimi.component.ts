import { Component, Input, OnInit } from '@angular/core';
import {Aylar, Blok, Hane, Odemeler } from '../AidatModel';


@Component({
  selector: 'site-yonetimi',
  templateUrl: './site-yonetimi.component.html',
  styleUrls: ['./site-yonetimi.component.css']
})
export class SiteYonetimiComponent implements OnInit {
   editBlok:Blok;
   editAy:Aylar;
   editHane:Hane;
  blok:Array<Blok>;
  hane:Array<Hane>;
  aylar:Array<Aylar>;
  filtrehane:Array<Hane>;
  @Input() editOdeme:Odemeler;
  odemeler: Array<Odemeler>;
 


  constructor() { }

  ngOnInit(): void {
    this.fillAylar();
    this.fillBloklar();
    this.fillHane();
    this.editOdeme=new Odemeler(0,0,0,"",0,false);
  }
  kaydet(){
    if(this.editOdeme.id==0){ // Ekle bölümü
      if(this.odemeler == null){
        this.odemeler=[new Odemeler(1,this.editOdeme.haneID,this.editOdeme.ayID,new Date().toDateString(),this.editOdeme.tutar,false)];
      }
      else{
        let newid = this.odemeler[this.odemeler.length-1].id +1;
        this.odemeler.push(new Odemeler(newid,this.editOdeme.haneID,this.editOdeme.ayID,new Date().toDateString(),this.editOdeme.tutar,false));
      }
      console.log(this.odemeler);
    }
  };
  

  getHane(haneid:string){
    this.fillHane();
    this.filtrehane= this.hane.filter(x => x.blokID== Number(haneid));
  }


fillBloklar(){
  this.blok=[
    new Blok(1,"A Blok"),
    new Blok(2,"B Blok"),
    new Blok(3,"C Blok")
  ]
}
//constructor(id:number,daireno:number,blokID:number,sakinID?:number){
fillHane(){
  this.hane=[
   new Hane(1,1,1,1),
   new Hane(2,2,1,2),
   new Hane(3,3,1,3),
   new Hane(4,4,1,4),
   new Hane(5,1,2,5),
   new Hane(6,2,2,6),
   new Hane(7,3,2,7),
   new Hane(8,4,2,8),
   new Hane(9,1,3,9),
   new Hane(10,2,3,10),
   new Hane(11,3,3,11),
   new Hane(12,4,3,12),
  ]
}

fillAylar()
{
  this.aylar=[
    new Aylar(1,"Ocak"),
    new Aylar(2,"Şubat"),
    new Aylar(3,"Mart"),
    new Aylar(4,"Nisan"),
    new Aylar(5,"Mayıs"),
    new Aylar(6,"Haziran"),
    new Aylar(7,"Temmuz"),
    new Aylar(8,"Ağustor"),
    new Aylar(9,"Eylül"),
    new Aylar(10,"Ekim"),
    new Aylar(11,"Kasım"),
    new Aylar(12,"Aralık")
   
  ]
}



}




