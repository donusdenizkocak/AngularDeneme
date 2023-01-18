// import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { KelimeKontrolModel } from  'app/models/KelimeModel';   //'app/models/KelimeModel';
// import { AlertifyService } from 'app/servisler/alertify.service';
// import { KelimeService } from 'app/servisler/kelime.service';
// import { Square } from 'app/square';

import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { KelimeKontrolModel } from "../models/dataModel";
import { AlertifyService } from "../servisler/alertify.service";
import { KelimelerService } from "../servisler/kelimeler.service";
import { Square } from "../square";

@Component({
  selector: 'app-kelime-kontrol',
  templateUrl: './kelime-kontrol.component.html',
  styleUrls: ['./kelime-kontrol.component.css']
})
export class KelimeKontrolComponent implements OnInit {

  kontrolkelime: KelimeKontrolModel;
  showSpinner:boolean = false;
  dogruYapti:boolean = false;
  dogrusayisi: number = 0;
  gosterimsayisi: number = 0;
  yanlissayisi: number = 0;
  toplamcevap: number;
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  ctxY: CanvasRenderingContext2D;
  squares: Square[] = [];

  constructor(private klmServis:KelimelerService,private alertify:AlertifyService) { }
  ngOnInit(): void {
    this.yenikelime();
  }

  rastgeleKelimeGetir(){
    this.showSpinner = true;
    this.klmServis.kontrolKelimeGetir().subscribe(veri =>{
      this.kontrolkelime = veri;
      this.showSpinner = false;
      this.dogruYapti = false;
      this.gosterimsayisi = veri.gosterSayi;
      this.dogrusayisi = veri.dogruSayi;
      this.yanlissayisi = this.gosterimsayisi - this.dogrusayisi;
      this.toplamcevap = this.dogrusayisi + this.yanlissayisi;
      var dogruyuzde = Math.round(this.dogrusayisi / this.toplamcevap * 100);
      var yanlisyuzde = 100 - dogruyuzde;

      this.grafikciz(dogruyuzde, yanlisyuzde);
    })
  }

  yenikelime(){
    this.kontrolkelime = new KelimeKontrolModel(0,"",0,0,0,0);
    this.rastgeleKelimeGetir();
  }

  kontrolet(cevap:string){
    if(!this.dogruYapti){
      const cevapkontrol = new KelimeKontrolModel(this.kontrolkelime.id,cevap,this.kontrolkelime.gosterilen,this.kontrolkelime.cu,this.kontrolkelime.gosterSayi,this.kontrolkelime.dogruSayi);
      this.klmServis.cevapKontrolEt(cevapkontrol).subscribe(veri =>{
        if(veri=="YES"){
          this.alertify.success("Bravo Bildiniz");
          this.dogruYapti = true;
          this.dogrusayisi++;
        }
        else{
          this.alertify.error("Bilemedin, tekrar dene");
          this.yanlissayisi++;
          this.gosterimsayisi++;
        }
        this.toplamcevap = this.dogrusayisi + this.yanlissayisi;
        var dogruyuzde = Math.round(this.dogrusayisi / this.toplamcevap * 100);
        var yanlisyuzde = 100 - dogruyuzde;
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctxY.clearRect(0, 0, this.ctxY.canvas.width, this.ctxY.canvas.height);
        this.grafikciz(dogruyuzde, yanlisyuzde);
      })
    }
    else{
      this.alertify.warning("Bu soruya zaten cevap verdiniz. Lütfen yeni kelime isteyiniz");
    }
  }

  grafikciz(dogruyuzde: number, yanlisyuzde: number) {

    // Grafik Çiz - Doğru
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.fillStyle = 'rgba(0,255,0,0.7)';
    //this.ctx.rect(0, 0, this.dogru, this.yanlis)
    const square = new Square(this.ctx, 30, 200 - dogruyuzde * 2, dogruyuzde * 2, this.ctx.fillStyle);
    this.squares = this.squares.concat(square);
    square.draw();

    // Grafik Çiz - Yanlış
    this.ctxY = this.canvas.nativeElement.getContext('2d');
    this.ctxY.fillStyle = 'rgba(255,0,0,0.7)';
    //this.ctxY.rect(0, 0, this.dogru, this.yanlis)
    const squareY = new Square(this.ctxY, 100, 200 - yanlisyuzde * 2, yanlisyuzde * 2, this.ctxY.fillStyle);
    this.squares = this.squares.concat(squareY);
    squareY.draw();
  }
}

