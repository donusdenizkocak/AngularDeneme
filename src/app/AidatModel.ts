export class AidatModel{
  constructor(){

  }
}
export class Sakinler{
  id:number;
  adi: string;
  soyadi: string;
  tc: string;
  dogumTarihi:string;
  silinmis:boolean;

  constructor(id:number,adi: string,soyadi:string,tc: string,dogumTarihi: string,silinmis:boolean){
    this.id = id;
    this.adi = adi;
    this.soyadi = soyadi;
    this.tc = tc;
    this.dogumTarihi = dogumTarihi;
    this.silinmis = silinmis;
  }
}

export class Blok{
  id:number;
  adi:string;

  constructor(id:number,adi:string){
    this.id = id;
    this.adi = adi;
  }
}

export class Hane{
  id:number;
  daireno:number;
  blokID:number;
  sakinID?:number; // değişkene eklenen soru işareti o alanın boş bırakılabileceği anlamını taşır. nullable

  constructor(id:number,daireno:number,blokID:number,sakinID?:number){
    this.id = id;
    this.daireno = daireno;
    this.blokID = blokID;
    this.sakinID = sakinID;
  }
}

export class Odemeler{
  id:number;
  haneID:number;
  ayID:number;
  odemeTarihi:string;
  tutar:number;
  silinmis:boolean;
  //odemeAlanPersonel:number;

  constructor(id:number,haneID:number,ayID:number,odemeTarihi:string,tutar:number,silinmis:boolean){
    this.id = id;
    this.haneID = haneID;
    this.ayID = ayID;
    this.odemeTarihi= odemeTarihi;
    this.tutar = tutar;
    this.silinmis=silinmis;
    //this.odemeAlanPersonel = odemeAlanPersonel;
  }
}

export class ListOdemeler{
  id:number;
  hane:string;
  adsoyad:string;
  donem:string;
  odemeTarihi:string;
  tutar:number;

  constructor(id:number,hane:string,adsoyad:string,donem:string,odemeTarihi:string,tutar:number){
    this.id = id;
    this.hane = hane;
    this.adsoyad = adsoyad;
    this.donem = donem;
    this.odemeTarihi= odemeTarihi;
    this.tutar = tutar;
  }
}

export class Aylar{
  id:number;
  adi:string;

  constructor(id:number,adi:string){
    this.id = id;
    this.adi = adi;
  }
}

export class Personel{
  id:number;
  adi:string;
  soyadi:string;
  tc:string;

  constructor(id:number,adi:string,soyadi:string,tc:string){
    this.id = id;
    this.adi = adi;
    this.soyadi = soyadi;
    this.tc = tc;
  }
}
