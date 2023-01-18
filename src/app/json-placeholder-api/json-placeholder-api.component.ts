import { Component } from '@angular/core';
import { Data, SayilarModel } from '../models/jsonPlaceholderModel';
import { JsonplaceholderService } from '../servisler/jsonplaceholder.service';

@Component({
  selector: 'json-placeholder-api',
  templateUrl: './json-placeholder-api.component.html',
  styleUrls: ['./json-placeholder-api.component.css']
})
export class JsonPlaceholderApiComponent {
jsonData:Data;
sayilar:Array<SayilarModel>;
constructor(private jsonServis:JsonplaceholderService){}

ngOnInit():void {
  this.getJsonData("1");
  this.sayilar=[];
  this.fillSayilar();
}
 getJsonData(sayi:string){
  if(sayi !="0"){
  this.jsonServis.getData(Number(sayi)).subscribe(veri => {
    this.jsonData=veri;
  });
 }
 else{
  this.jsonData = null;
 }
}
 fillSayilar(){
  for (let index = 1; index < 35; index++) {
   this.sayilar.push(new SayilarModel(index, index.toString()));
    
  }
 }
}
