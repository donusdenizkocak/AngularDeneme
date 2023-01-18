export class DemirbasModel{
constructor(){

}
}
export class Esyalar{
    id:number;
    barkodKodu:string;
    kategoriID:number;
    cinsID:number;
    adet:number;
    aciklama:string;
    zimmetPersonelID:number;
    zimmetTarihi:string;
    zimmetNotu:string;
    aktif:boolean;
    silinmis:boolean;


    constructor(id:number,barkodKodu:string,katogoriID:number,cinsID:number,adet:number,aciklama:string,zimmetPersonelID:number,zimmetTarihi:string,zimmetNotu:string,aktif:boolean,silinmis:boolean,){

        this.id=id;
        this.barkodKodu=barkodKodu;
        this.kategoriID=katogoriID;
        this.cinsID=cinsID;
        this.adet=adet;
        this.aciklama=aciklama;
        this.zimmetPersonelID=zimmetPersonelID;
        this.zimmetTarihi=zimmetTarihi;
        this.zimmetNotu=zimmetNotu;
        this.aktif=aktif;
        this.silinmis=silinmis;
    }
}
export class Personel{
    id:number;
    adi:string;
    soyadi:string;
    tc:string;
    departmanID:number;

    constructor(id:number,adi:string,soyadi:string,tc:string,departmanID:number,){
        this.id=id;
        this.adi=adi;
        this.soyadi=soyadi;
        this.tc=tc;
        this.departmanID=departmanID;
    }
}

export class Departman{
    id:number;
    departmanAdi:string;

    constructor(id:number,departmanAdi:string){
        this.id=id;
        this.departmanAdi=departmanAdi;
    }
}

export class Kategori{
    id:number;
    adi:string;

    constructor(id:number,adi:string){
        this.id=id;
        this.adi=adi;
    }
}

export class Cins{
    id:number;
    adi:string;
    kategoriID:number;

    constructor(id:number,adi:string,katid:number){
        this.id=id;
        this.adi=adi;
        this.kategoriID=katid;
    }
}
export class esyaListesi{
    id:number;
    cinsAdi:string;
    adet:number;
  
    constructor(id:number,cinsAdi:string,adet:number){
      this.id = id;
      this.cinsAdi = cinsAdi;
      this.adet = adet;
    }
  }















export class Site{
    id:number;
    blokID:number;
    daireID:number;
    adi:string;
    evsahibi:boolean;
    kiraci:boolean;
    aidatBilgisi:number;

    constructor(id:number,blokID:number,daireID:number,adi:string,evsahibi:boolean,kiraci:boolean,aidatBilgisi:number){
        this.id=id;
        this.blokID=blokID;
        this.daireID=daireID;
        this.adi=adi;
        this.evsahibi=evsahibi;
        this.kiraci=kiraci;
        this.aidatBilgisi=aidatBilgisi;
    }
}

export class Blokbilgi{
    id:number;
    adi:string;

    constructor( id:number,adi:string){
        this.id=id;
        this.adi=adi;
    }
}

export class DaireBilgi{
    id:number;
    daire:number;
    blokID:number;

    constructor(id:number, daire:number,blokID:number){
        this.id=id;
        this.daire=daire;
        this.blokID=blokID;
    }
}

export class Ay{
    id:number;
    adi:string;

    constructor( id:number,adi:string){
        this.id=id;
        this.adi=adi;
    }
}

export class Aidat{
    id:number;
    ayID:number;
    odemeTarihi:string;
    daireID:number;
    miktar:number; 

   constructor( id:number,ayID:number,odemeTarihi:string,daireID:number,miktar:number){

   }
}