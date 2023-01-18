import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CumleAlModel, KelimeKaydetModel, KelimeKontrolModel, SonKelimelerListe } from '../models/dataModel';
 
const HttpOptions = {
  headers: new HttpHeaders().set('Authorization','Bearer ' + localStorage.getItem("token"))
}

@Injectable({
  providedIn: 'root'
})

//JWT Token -Bearer -> tokenın başına "Bearer " ekleniyor.
export class KelimelerService {
baseUrl1:string="http://api.fonksiyoneltiphastanesi.com/api/Kelimeler/";   //Authorization gerekmeyen servis
baseUrl2:string="http://api.fonksiyoneltiphastanesi.com/api/Vocabularies/";   //Authorization gerekli servis
  constructor(private http:HttpClient) { }

sonkelimeler():Observable<SonKelimelerListe[]>{
 return this.http.get<SonKelimelerListe[]>(this.baseUrl2 + "sonkelimeler",HttpOptions);
}

cumlegetir(kid:number):Observable<CumleAlModel>{
    return this.http.get<CumleAlModel>(this.baseUrl2 + "cumlealalim/" + kid, HttpOptions)   // bu satıp bir http request oluşturur -GET REQUEST(TALEP ETMEK)
  }

  save(klm:KelimeKaydetModel){
    return this.http.post<KelimeKaydetModel>(this.baseUrl2 + 'save', klm, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })
    });
  } 

  kontrolKelimeGetir():Observable<KelimeKontrolModel>{
    return this.http.get<KelimeKontrolModel>(this.baseUrl2 + "rastgelekelime", HttpOptions);
    //bu satir bir HTTP request oluşturur
  }

  cevapKontrolEt(cvp:KelimeKontrolModel):Observable<string>{
    return this.http.post<string>(this.baseUrl2 + 'kontrol',cvp, {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Authorization':'Bearer ' + localStorage.getItem("token")
      })
    });
  }


  delete(kid:number){
    return this.http.put(this.baseUrl2 + 'sil/' + kid,"", {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })
    });
  }

  kelimegetir(kid:number):Observable<KelimeKaydetModel>{
    return this.http.get<KelimeKaydetModel>(this.baseUrl2 + "kelimegetir/" + kid, HttpOptions);
    //bu satır http request oluşturur get request yani talep
  }

}

