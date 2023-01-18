import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../Model';

@Component({
  selector: 'app-laptop-add',
  templateUrl: './laptop-add.component.html',
  styleUrls: ['./laptop-add.component.css']
})
export class LaptopAddComponent implements OnInit {
  mdl: Array<ProductModel>   //Product model dizisini oluşturuyor
  constructor() { }
  

  ngOnInit(): void {
     
    // this.mdl= [
    //   new ProductModel(1,"Asus","X250-C","Intel i3 12065","16 GB",9350,"asus-1.png"),
    //   new ProductModel(2,"Asus","X260-H","Intel i5 12150","16 GB",9980,"asus-2.png"),
    //   new ProductModel(3,"HP","15-TF3","Intel i3 11065","8 GB",12500,"hp-1.jpg"),
    //   new ProductModel(4,"Lenovo","LP3-A5","Intel i3 12650","24 GB",19000,"lenovo-1.jpg"),
    //   new ProductModel(5,"HP","15-TF7","Intel i7 12700H","24 GB",27300,"hp-2.png")
    // ];
  }
  kaydet(marka:string,model:string,islemci:string,ram:string,fiyat:string,image:string){
    document.getElementById("txtBrand").classList.remove("border-danger");
    document.getElementById("txtModel").classList.remove("border-danger");
    document.getElementById("txtRAM").classList.remove("border-danger");
    if(marka != "" && marka != null && marka != undefined){
    if(model != "" && model != null && model != undefined){
    if(ram != "" && ram != null && ram != undefined){
    let newid:number;
    let kdvlifiyat:number=Number((Number(fiyat)*1.18).toFixed(2));
    if(this.mdl==null){
      this.mdl=[new ProductModel(1,marka,model,islemci,ram,kdvlifiyat,image)];
    }
    else{
      newid=this.mdl[this.mdl.length-1].id + 1;    //modeldeki son elemanın id sini bulup 1 ekle
      let yenilaptop = new ProductModel(newid,marka,model,islemci,ram,Number(fiyat),image);
    this.mdl.push(yenilaptop);
  }
 }
 else{
  alert("Lütfen RAM bilgisi yazınız");
  document.getElementById("txtRAM").classList.add("border-danger");
 }
}
else{
  alert("Lütfen Model bilgisi yazınız");
  document.getElementById("txtModel").classList.add("border-danger");
 }
}
else{
  alert("Lütfen Marka bilgisi yazınız");
  document.getElementById("txtBrand").classList.add("border-danger");
 }
}
}

// newid=this.mdl[this.mdl.length-1].id + 1;    //modeldeki son elemanın id sini bulup 1 ekle
// let yenilaptop = new ProductModel(newid,marka,model,islemci,ram,Number(fiyat),image);
// this.mdl.push(yenilaptop);