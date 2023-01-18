import { Component } from '@angular/core';
import { OgrKayitModel } from '../models/dataModel';
import { SayilarModel } from '../models/jsonPlaceholderModel';
import { AlertifyService } from '../servisler/alertify.service';
import { AuthService } from '../servisler/auth.service';

@Component({
  selector: 'ogrenciekle',
  templateUrl: './ogrenciekle.component.html',
  styleUrls: ['./ogrenciekle.component.css']
})
export class OgrenciekleComponent {
sayilar:Array<SayilarModel>;
model:OgrKayitModel;

constructor(private authServis:AuthService, private alertify:AlertifyService){}
ngOnInit(): void {
  this.model= new OgrKayitModel("","","1","","");
  this.sayilar=[];
  this.fillSayilar() ;
}

  fillSayilar(){
    for (let index = 1; index < 13; index++) {
     this.sayilar.push(new SayilarModel(index, index.toString()));
    
    }
    
   }

register(){
  this.authServis.register(this.model).subscribe(next=>{
    this.alertify.success(this.model.adiSoyadi + " adlı öğrenci başarıyla eklendi.")
    this.model= new OgrKayitModel("","","1","","");
  },error =>{
    this.alertify.error("Kayıt Yapılamadı.Lütfen tüm verileri yönergelere uygun giriniz.")
  });
}
}
