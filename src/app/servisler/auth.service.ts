import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { OgrKayitModel } from '../models/dataModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   baseUrl:string = "http://api.fonksiyoneltiphastanesi.com/api/User/";
  
  constructor(private http:HttpClient) { }

  login(model:any){
    return this.http.post(this.baseUrl + "login",model,{
      headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Accept': 'application/json'
    })
  }).pipe(
    map((response:any)=>{
      const result=response;
      if(result){
        localStorage.setItem("tur",result.tur);
        localStorage.setItem("token",result.token);
      }
    })
  )
  }

register(model:OgrKayitModel){
  var header = {
    headers:new HttpHeaders().set("Authorization","Bearer " + localStorage.getItem("token"))
  }
  return this.http.post(this.baseUrl + 'register',model,header);
}





  loggedin(){
    return localStorage.getItem("token") ? true : false;
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("tur");
  }
}
