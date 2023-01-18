import { Component, Input, OnInit } from '@angular/core';
import { Kategori, Cins, Esyalar, esyaListesi } from '../DemirbasModel';
import { AlertifyService } from '../servisler/alertify.service';

@Component({
  selector: 'app-demirbas2',
  templateUrl: './demirbas2.component.html',
  styleUrls: ['./demirbas2.component.css']
})
export class Demirbas2Component implements OnInit {
  @Input() editEsya:Esyalar;
    kats:Array<Kategori>;
    cins:Array<Cins>;
    filtreCins:Array<Cins>;
    esyalar:Array<Esyalar>;
    showlist:boolean=true;
    showedit:boolean=false;
    esyaListe:Array<esyaListesi>;
    constructor(private alertify:AlertifyService) { }
  
    ngOnInit(): void {
      this.fillEsyalar();
      this.fillCategory();
      this.fillCins();
      this.getEsyaListesi();
      this.alertify.success("Demirbaş Kaydedildi");
      this.alertify.warning("Demirbaş Güncellendi");
    }

    getEsyaListesi(){
      this.esyaListe= [];
      for(let es of this.esyalar){
        if(!es.silinmis){
        let yeniCinsAdi = this.cins.find(x=>x.id==es.cinsID).adi;
        this.esyaListe.push(new esyaListesi(es.id,yeniCinsAdi,es.adet));
      }
      }
    }


 
  getCins(katid:string){
    this.fillCins();
    this.filtreCins= this.cins.filter(x => x.kategoriID== Number(katid));
  }
  sil(silinecekid){
    //diziden silmek için splice(indexno,silinecek kayıt sayısı);
    if(confirm("Silmek istediğinize emin misiniz?")==true){
      var silinecekIndex = this.esyalar.findIndex(x=>x.id==silinecekid);
      this.esyalar.splice(silinecekIndex,1);
      this.getEsyaListesi();
    }
  }

  duzenle(numara){
    this.editEsya = this.esyalar.find(x=>x.id==numara);
    this.showedit = true;
    this.showlist = false;
    this.getCins(this.editEsya.kategoriID.toString());
  }

  listeyedon(){
    this.showedit = false;
    this.showlist = true;
  }

  fillEsyalar(){
    this.esyalar = [
      new Esyalar(1,"635383",3,11,1,"Samsung Note 20 - Beyaz",1,"2022-11-23","",true,false),
      new Esyalar(2,"635847",3,12,1,"Siemens - yeşil",1,"2022-11-23","",true,false),
      new Esyalar(3,"635985",4,15,2,"",1,"2022-11-23","",true,false),
      new Esyalar(4,"636405",1,2,1,"",1,"2022-11-23","",true,false)
    ];
  }

  fillCategory(){
    this.kats = [
      new Kategori(1,"Ofis Mobilyası"),
      new Kategori(2,"Ofis Teknolojik Ürünü"),
      new Kategori(3,"Telefon"),
      new Kategori(4,"Ölçüm Cihazı"),
      new Kategori(5,"Temizlik Makineleri")
    ];
  }
  silPasif(silinecekid){
    var indeks= this.esyalar.findIndex(x=>x.id==silinecekid);
    this.esyalar[indeks].silinmis=true;

    this.getEsyaListesi();
  }

  yeniKayit(){
    this.showedit=true;
    this.showlist=false;
    this.editEsya=new Esyalar(0,"",0,0,0,"",0,"","",false,false);
  }
  kaydet(){
    //eşyalar içinde değisecekolan kaydın indexini bul
    //yeni değerleri üstüne kaydet
    //id alanı unique yani tektir
    //var degisecekEsya = this.esyalar.find(x=>x.id==this.editEsya.id);
    if(this.editEsya.id>0){
    var indeks = this.esyalar.findIndex(x=>x.id==this.editEsya.id);
    this.esyalar[indeks].aciklama=this.editEsya.aciklama;
    this.esyalar[indeks].adet=this.editEsya.adet;
    this.esyalar[indeks].aktif=this.editEsya.aktif;
    this.esyalar[indeks].barkodKodu=this.editEsya.barkodKodu;
    this.esyalar[indeks].cinsID=this.editEsya.cinsID;
    this.esyalar[indeks].kategoriID=this.editEsya.kategoriID;
    this.esyalar[indeks].zimmetNotu=this.editEsya.zimmetNotu;
    this.esyalar[indeks].zimmetPersonelID=this.editEsya.zimmetPersonelID;
    this.alertify.warning("Demirbaş Güncellendi");
  }
  else{     //yeni demirbaş eşya ekleme
this.editEsya.zimmetTarihi=new Date().toString();
if(this.esyalar == null || this.esyalar.length==0){
  this.editEsya.id=1;
}
else{
  this.editEsya.id=this.esyalar[this.esyalar.length-1].id +1;
}
this.esyalar.push(this.editEsya);
this.alertify.success("Demirbaş Kaydedildi");
  }

    this.getEsyaListesi();
  }

  fillCins(){
    this.cins = [
      new Cins(1,"Bilgisayar Masası",1),
      new Cins(2,"Sandalye",1),
      new Cins(3,"Evrak Dolabı",1),
      new Cins(4,"Koltuk",1),
      new Cins(5,"Dizüstü Bilgisayar",2),
      new Cins(6,"Halı Yıkama Makinesi",5),
      new Cins(7,"Bilgisayar Kasası",2),
      new Cins(8,"Bilgisayar Faresi",2),
      new Cins(9,"Klavye",2),
      new Cins(10,"Yazıcı",2),
      new Cins(11,"Cep Telefonu",3),
      new Cins(12,"Masa Telefonu",3),
      new Cins(13,"Kablosuz Telefon",3),
      new Cins(14,"Telsiz",3),
      new Cins(15,"Voltmetre",4),
      new Cins(16,"Koltuk Yıkama Ünitesi",5),
      new Cins(17,"Matkap",5),
      new Cins(18,"Kompresör",5)
    ];
  }
}
