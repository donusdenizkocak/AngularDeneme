import { Component, OnInit } from '@angular/core';
import { Kategori, Cins, Esyalar } from '../DemirbasModel';

@Component({
  selector: 'app-demirbas',
  templateUrl: './demirbas.component.html',
  styleUrls: ['./demirbas.component.css']
})
export class DemirbasComponent implements OnInit {
  kats:Array<Kategori>;
  cins:Array<Cins>;
  filtreCins:Array<Cins>;
  esyalar:Array<Esyalar>;
  constructor() { }

  ngOnInit(): void {
    this.fillCategory();
    //this.fillCins();
  }
 esyaKaydet(txtBarkod:string,slctKategori:string,slctCins:string,txtAdet:string,txtAciklama:string,slctPersonel:string,txtZNot:string,chkAktif:boolean){
  var newid:number=0;
  var d=new Date;
  if(this.esyalar==null){
    newid=1;
    this.esyalar = [
      new Esyalar(newid,txtBarkod,Number(slctKategori),Number(slctCins),Number(txtAdet),txtAciklama,Number(slctPersonel),d.toDateString(),txtZNot,chkAktif,false)
    ];
  }
  else{
    newid= this.esyalar[this.esyalar.length -1].id + 1;
    var yeniEsya =new Esyalar(newid,txtBarkod,Number(slctKategori),Number(slctCins),Number(txtAdet),txtAciklama,Number(slctPersonel),d.toDateString(),txtZNot,chkAktif,false);
    this.esyalar.push(yeniEsya);
  }
  console.log(this.esyalar);
 }




  getCins(katid:string){
    this.fillCins();
    this.filtreCins= this.cins.filter(x => x.kategoriID== Number(katid));
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
