import { Component, OnInit } from '@angular/core';
import { ayliksatis } from '../Model';
@Component({
  selector: 'app-satis-grafik',
  templateUrl: './satis-grafik.component.html',
  styleUrls: ['./satis-grafik.component.css']
})
export class SatisGrafikComponent implements OnInit {
  satislar:Array<ayliksatis>
  toplam:number=0;
  constructor() { }

  ngOnInit(): void {
    this.satislar = [
      new ayliksatis("Ocak",690,0,0),
      new ayliksatis("Şubat",716,0,0),
      new ayliksatis("Mart",857,0,0),
      new ayliksatis("Nisan",910,0,0),
      new ayliksatis("Mayıs",845,0,0),
      new ayliksatis("Haziran",739,0,0),
      new ayliksatis("Temmuz",420,0,0),
      new ayliksatis("Ağustos",187,0,0),
      new ayliksatis("Eylül",1468,0,0),
      new ayliksatis("Ekim",690,0,0),
      new ayliksatis("Kasım",768,0,0),
      new ayliksatis("Aralık",1500,0,0)
      
    ]

    for(let sts of this.satislar){
      this.toplam += sts.satis;
    }

    for(let sts of this.satislar){
      //o aydaki satışın yüzdesi
      let yuzdelik = (sts.satis / this.toplam *100*20).toFixed(1);
      sts.genislik = Number(yuzdelik);

      let yuzdelik2=(sts.satis / this.toplam *100).toFixed(1);
      sts.yuzde = Number(yuzdelik2);
    }
    console.log(this.satislar);
  }

}
