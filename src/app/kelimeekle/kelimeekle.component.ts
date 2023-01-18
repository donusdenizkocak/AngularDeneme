import { Component } from '@angular/core';
import { CumleModel, KelimeKaydetModel } from '../models/dataModel';
import { AlertifyService } from '../servisler/alertify.service';
import { KelimelerService } from '../servisler/kelimeler.service';

@Component({
  selector: 'kelimeekle',
  templateUrl: './kelimeekle.component.html',
  styleUrls: ['./kelimeekle.component.css']
})
export class KelimeekleComponent {
constructor(private klmServis:KelimelerService, private alertify:AlertifyService){}
 ngOnInit(): void {
 
 }


 kelimeKaydet(klm:string, trcm:string, cumle:string){
  var cumlemodel = [new CumleModel(0,cumle,0)];
  var kelime = new KelimeKaydetModel(0,klm,trcm,0,1,new Date,0,0,true,cumlemodel);
  this.klmServis.save(kelime).subscribe(next =>{
    this.alertify.success("Kelime Kaydedildi.");
  },error => {
    this.alertify.error("HATA ! <br />" + error.message);
  })
}
}