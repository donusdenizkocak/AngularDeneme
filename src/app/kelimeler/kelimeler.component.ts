import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CumleAlModel, SonKelimelerListe } from '../models/dataModel';
import { AlertifyService } from '../servisler/alertify.service';
import { AuthService } from '../servisler/auth.service';
import { KelimelerService } from '../servisler/kelimeler.service';

@Component({
  selector: 'kelimeler',
  templateUrl: './kelimeler.component.html',
  styleUrls: ['./kelimeler.component.css']
})
export class KelimelerComponent {
SonKelimeListesi:Array<SonKelimelerListe>;
cumle:CumleAlModel;
model:any={};
girisyapildi:boolean=false;
tur:string;

constructor(private klmServis:KelimelerService, private alertify:AlertifyService, private authService:AuthService, private router:Router){}
ngOnInit(): void {
  this.girisyapildi = this.authService.loggedin();
  console.log(this.girisyapildi);
  if(this.girisyapildi){
    this.sonKelimeler();
    this.tur = localStorage.getItem("tur");
  }
}

login(){
  this.authService.login(this.model).subscribe(next => {
    this.alertify.success("login başarılı");
    this.girisyapildi =true;
    this.tur = localStorage.getItem("tur");
    setTimeout(()=>{
      this.router.navigate(['/kelimeler'])
    }, 1000)
  }, error =>{
    this.alertify.error("Kullanıcı adı veya şifre hatalı");
  })
}

cikis(){
  this.authService.logout();
  this.girisyapildi =false;
}


sonKelimeler(){
  this.klmServis.sonkelimeler().subscribe(veri=>{
    this.SonKelimeListesi = veri;
  })
}

cumlegetir(kid:number){
  this.cumle=null;
  this.klmServis.cumlegetir(kid).subscribe(veri=>{
    this.cumle=veri;
    if(this.cumle){
      if(this.cumle.kelimeID==0){
        this.alertify.error("Cümle Bulunamadı");
      }
      else{
        this.alertify.success(this.cumle.metin);
      }
    }
  });
}

kelimeSil(id:number){
  this.klmServis.delete(id).subscribe(next => {
    this.alertify.success("Kelime Silindi");
    this.sonKelimeler();
  }, error => {
    this.alertify.error("HATA! - Kelime Silinemedi");
  })
}

}
