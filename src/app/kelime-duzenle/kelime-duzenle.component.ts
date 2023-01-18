import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CumleModel, KelimeKaydetModel } from '../models/dataModel';
import { AlertifyService } from '../servisler/alertify.service';
import { KelimelerService } from '../servisler/kelimeler.service';

@Component({
  selector: 'kelime-duzenle',
  templateUrl: './kelime-duzenle.component.html',
  styleUrls: ['./kelime-duzenle.component.css']
})
export class KelimeDuzenleComponent {
@Input() model:KelimeKaydetModel;
kelimeyok:boolean=false;

constructor(private router:Router, private _route:ActivatedRoute, private klmServis:KelimelerService, public alertify:AlertifyService){}

ngOnInit(): void{
  var id=0;
  this._route.params.subscribe((params) => {
    id=params.id;
  });
  if(Number.isNaN(Number(id))){
    this.router.navigate(['kelimeler']);
  }
  this.model=null;
  this.klmServis.kelimegetir(id).subscribe(veri =>{
    this.model=veri;
  },error=>{
    this.kelimeyok=true;
    this.alertify.error("Kelime Bulunamadı");
  })
}


kelimeDuzenle(){
  var cumlemodel = [new CumleModel(0,"",0)];
  var kelime=new KelimeKaydetModel(this.model.id,this.model.kelime,this.model.tercumesi,0,1,new Date,0,0,true,cumlemodel);
  this.klmServis.save(kelime).subscribe(next =>{
    this.alertify.success("Kelime Düzenlendi");
  },error => {
    this.alertify.error("HATA ! <br/>" + error.message);
  })
};


}
