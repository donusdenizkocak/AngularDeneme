import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Aylar, Blok, Hane, ListOdemeler, Odemeler, Sakinler } from '../AidatModel';
import { AlertifyService } from '../servisler/alertify.service';

@Component({
  selector: 'app-odemeler',
  templateUrl: './odemeler.component.html',
  styleUrls: ['./odemeler.component.css']
})
export class OdemelerComponent implements OnInit {
showlist:boolean=false;
showedit:boolean=true;
aylar:Array<Aylar>;
haneler:Array<Hane>;
blokHaneler:Array<Hane>;
bloklar:Array<Blok>;
editOdeme:Odemeler;
odemeler:Array<Odemeler>;
sakinler:Array<Sakinler>;
odemeListesi:Array<ListOdemeler>;
blokNO:number=0;


  constructor(private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.editOdeme = new Odemeler(0,0,0,"",0,false);
    this.fillAylar();
    this.fillBloklar();
    this.fillHaneler();
    this.fillSakinler();
    this.odemeler = [
      new Odemeler(1,3,4,"25 Kasım 2022",600,false),
      new Odemeler(2,6,5,"26 Kasım 2022",600,false),
      new Odemeler(3,8,4,"24 Kasım 2022",600,false),
      new Odemeler(4,1,4,"25 Kasım 2022",600,false)
    ]
  }

 

getHanes(blokID:string){
  this.blokHaneler = this.haneler.filter(x=>x.blokID==Number(blokID));
}
showEkle(){
  this.showedit=true;
  this.showlist=false;

}

listeyedon(){
  this.showedit=false;
  this.showlist=true;
  this.listOdemeler();
}
kaydet(){
if(this.editOdeme.tutar>0){
  if(this.editOdeme.id==0){     //Yeni Odeme Kaydet
  if(this.odemeler==null || this.odemeler==undefined){
    this.odemeler = [new Odemeler(1,this.editOdeme.haneID,this.editOdeme.ayID,new Date().toString(),this.editOdeme.tutar,false)];
  }
  else{
    this.odemeler.push(new Odemeler(this.odemeler[this.odemeler.length-1].id+1,this.editOdeme.haneID,this.editOdeme.ayID,new Date().toDateString(),this.editOdeme.tutar,false));
  }
  }
  console.log(this.odemeler);
}
else{
  alert("Lütfen Tutar Yazınız");
}
}
listOdemeler(filtreAy:string ="0"){
      //ödeme listesini doldurabilmek içn önce ödeme listesi içinde gezelim
      //her bir ögenin haneID bilgisinden kapı nosunu ve blok bilgisini bulalım
      //blok ID sinden blok adını bulalım
      //SakınID bilgisinden sakının adı ve soyadını bulalım
      //donem bilgisinden ay adını bulalım
      //ve bunlların hepsini ödemeListesine kaydedelim
      this.odemeListesi=[];

      var filtrelenmisOdemeler:Array<Odemeler> = this.odemeler.filter(x=>x.silinmis==false);
      if(Number(filtreAy)>0){
        filtrelenmisOdemeler= filtrelenmisOdemeler.filter(y=>y.ayID ==Number(filtreAy));
      }
      
      for(const item of filtrelenmisOdemeler){
              //hane nosunu alıyoruz
        let haneNo=this.haneler.find(x=>x.id==item.haneID).daireno; 
             //blok ID sini alalım
        let blokID = this.haneler.find(x=>x.id==item.haneID).blokID;
             //bu blokID den blok adını bulalım
        let blokAdi= this.bloklar.find(x=>x.id==blokID).adi;
                 //haneSakin ID alalım
        let sakinID = this.haneler.find(x=>x.id==item.haneID).sakinID??0;   //sona eklenen ??0 demek boş ise 0 yaz 
                //bu sakinID den sakinin ad ve soyadını alalım
        let sakinAd = this.sakinler.find(x=>x.id==sakinID).adi + " " + this.sakinler.find(x=>x.id==sakinID).soyadi;
               //ay adını alalım
        let ayadi = this.aylar.find(x=>x.id==item.ayID).adi;
           //hepsini odemeListesine kaydedelim
        this.odemeListesi.push(new ListOdemeler(item.id,blokAdi + "-" + haneNo,sakinAd,ayadi,item.odemeTarihi,item.tutar));                     
      }

}
// filtrele(ayFiltresi:string){
//   this.odemeListesi=[];
//   for(const item of this.odemeler.filter(x=>x.silinmis==false).filter(x=>x.ayID==Number(ayFiltresi))){
//           //hane nosunu alıyoruz
//     let haneNo=this.haneler.find(x=>x.id==item.haneID).daireno; 
//          //blok ID sini alalım
//     let blokID = this.haneler.find(x=>x.id==item.haneID).blokID;
//          //bu blokID den blok adını bulalım
//     let blokAdi= this.bloklar.find(x=>x.id==blokID).adi;
//              //haneSakin ID alalım
//     let sakinID = this.haneler.find(x=>x.id==item.haneID).sakinID??0;   //sona eklenen ??0 demek boş ise 0 yaz 
//             //bu sakinID den sakinin ad ve soyadını alalım
//     let sakinAd = this.sakinler.find(x=>x.id==sakinID).adi + " " + this.sakinler.find(x=>x.id==sakinID).soyadi;
//            //ay adını alalım
//     let ayadi = this.aylar.find(x=>x.id==item.ayID).adi;
//        //hepsini odemeListesine kaydedelim
//     this.odemeListesi.push(new ListOdemeler(item.id,blokAdi + "-" + haneNo,sakinAd,ayadi,item.odemeTarihi,item.tutar));                     
//   }
// }
duzenle(itemID){
this.showedit=true;
this.showlist=false;
this.editOdeme=this.odemeler.find(x=>x.id==itemID);
this.blokNO = this.haneler.find(x=>x.id==this.editOdeme.haneID).blokID;
this.getHanes(this.blokNO.toString());
}
odemeSil(itemID){
  if(confirm("Silmek istediğinize emin misiniz?")==true){
    var silinecekIndex = this.odemeler.findIndex(x=>x.id==itemID);
    //this.odemeler.find(x=>x.id==itemID).silindi=true;
    this.odemeler[silinecekIndex].silinmis=true;
    this.listOdemeler();
    this.alertify.success("Silme işlemi tamamlanmıştır.")
  }
} 




  fillAylar(){
    this.aylar = [
      new Aylar(1,"Ocak"),
      new Aylar(2,"Şubat"),
      new Aylar(3,"Mart"),
      new Aylar(4,"Nisan"),
      new Aylar(5,"Mayıs"),
      new Aylar(6,"Haziran"),
      new Aylar(7,"Temmuz"),
      new Aylar(8,"Ağustos"),
      new Aylar(9,"Eylül"),
      new Aylar(10,"Ekim"),
      new Aylar(11,"Kasım"),
      new Aylar(12,"Aralık")
    ];
  }

  fillBloklar(){
    this.bloklar=[
      new Blok(1,"A Blok"),
      new Blok(2,"B Blok"),
      new Blok(3,"C Blok")
    ];
  }
fillHaneler(){
    this.haneler=[
      new Hane(1,1,1,1),
      new Hane(2,2,1,2),
      new Hane(3,3,1,3),
      new Hane(4,4,1,4),
      new Hane(5,1,2,5),
      new Hane(6,2,2,6),
      new Hane(7,3,2,7),
      new Hane(8,4,2,8),
      new Hane(13,5,2,13),
      new Hane(9,1,3,9),
      new Hane(10,2,3,10),
      new Hane(11,3,3,11),
      new Hane(12,4,3,12),
      new Hane(14,5,3,14),
      new Hane(15,6,3,15)
    ];
  }

  fillSakinler(){
    this.sakinler=[
      new Sakinler(1,"Remzi","Kurt","89547269802","1976",false),
      new Sakinler(2,"Hakkı","Gök","78410695842","1946",false),
      new Sakinler(3,"Yusuf","Kocaman","18965472308","1979",false),
      new Sakinler(4,"Serdar Tuna","Demirci","49689620482","1991",false),
      new Sakinler(5,"Gürkan","Özer","74158963204","1974",false),
      new Sakinler(6,"Fahrettin","Altun","69485963698","1982",false),
      new Sakinler(7,"Emine","Çiçek","95874102366","1983",false),
      new Sakinler(8,"Leman","Samyeli","89547269178","1989",false),
      new Sakinler(9,"Şakir Osman","Çiçek","89547269956","1966",false),
      new Sakinler(10,"Polat","Taştan","89547269638","1961",false),
      new Sakinler(11,"Kadir","Bingöl","89547269577","1963",false),
      new Sakinler(12,"Şükrü","Poyraz","89547264899","1992",false),
      new Sakinler(13,"Demet","Büyük","89547265230","1987",false),
      new Sakinler(14,"Mahmut","Canpolat","89547267410","1969",false),
      new Sakinler(15,"Cengiz","Açık","89547269964","1971",false),
      new Sakinler(16,"Ayhan","Dilber","89547269740","1979",false),
      new Sakinler(17,"Melike","Şahin","89547269558","1987",false),
      new Sakinler(18,"Sedat","Delibalta","76547260196","1990",false),
    ];
  }

}
