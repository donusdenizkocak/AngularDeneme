import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../models/jsonPlaceholderModel';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

baseUrl:string = "https://jsonplaceholder.typicode.com/";

  constructor(private http:HttpClient) { }

//servis methotları
//get 0> veri çekmek -almak
// post  => veriyi kaydetek için
// put  => veriyi düzenlemek için
// delete => veriyi silmek için

//Request :Talep
// Response : Cevap



getData(veriid:number):Observable<Data>{
  return this.http.get<Data>(this.baseUrl + 'posts/' + veriid);
}




}
