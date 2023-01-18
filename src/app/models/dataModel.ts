export class dataModel{
    constructor(){}
}
export class SonKelimelerListe{
    id:number;
    kelime:string;
    tercumesi:string;
    userID:number;
    dilID:number;
    tarih:string;
    cagrilmaSayisi:number;
    dogruSayisi:number;
    aktif:boolean;
    user:null;
    dil:null;
    cumle:null;

    constructor(id:number,kelime:string,tercumesi:string,userID:number,dilID:number,tarih:string,cagrilmaSayisi:number,dogruSayisi:number,aktif:boolean,user:null,dil:null,cumle:null){
        this.id=id;
        this.kelime=kelime;
        this.tercumesi=tercumesi;
        this.userID=userID;
        this.dilID=dilID;
        this.tarih=tarih;
        this.cagrilmaSayisi=cagrilmaSayisi;
        this.dogruSayisi=dogruSayisi;
        this.aktif=aktif;
        this.user=user;
        this.dil=dil;
        this.cumle=cumle;
    }
}
export class CumleAlModel{
    kelimeID:number;
    metin:string;

    constructor(kelimeID:number,metin:string){
        this.kelimeID=kelimeID;
        this.metin=metin;
    }
}

export class OgrKayitModel{
    adiSoyadi:string;
    okul:string;
    sinif:string;
    email:string;
    password:string;

    constructor(adiSoyadi:string,okul:string,sinif:string,email:string,password:string){
        this.adiSoyadi=adiSoyadi;
        this.okul=okul;
        this.sinif=sinif;
        this.email=email;
        this.password=password;
    }
}
 
export class KelimeKaydetModel{
    id:number;
    kelime:string;
    tercumesi:string;
    userID:number;
    dilID:number;
    tarih:Date;
    cagrilmaSayisi:number;
    dogruSayisi:number;
    aktif:boolean;
    cumle:CumleModel[];

    constructor(id:number,kelime:string,tercumesi:string,userID:number,dilID:number,tarih:Date,cagrilmaSayisi:number,dogruSayisi:number,aktif:boolean,cumle:CumleModel[]){
        this.id=id;
        this.kelime=kelime;
        this.tercumesi=tercumesi;
        this.userID=userID;
        this.dilID=dilID;
        this.tarih=tarih;
        this.cagrilmaSayisi=cagrilmaSayisi;
        this.dogruSayisi=dogruSayisi;
        this.aktif=aktif;
        this.cumle=cumle;
    }
}
export class CumleModel{
    id:number;
metin:string;
kelimeID:number;

constructor(id:number,metin:string,kelimeID:number){
    this.id=id;
this.metin=metin;
this.kelimeID=kelimeID;
}
}

export class KelimeKontrolModel{
    id:number;
    cevap:string;
    gosterilen:number;
    cu:number;
    gosterSayi:number;
    dogruSayi:number;

    constructor(id:number,cevap:string,gosterilen:number,cu:number,gosterSayi:number,dogruSayi:number){
        this.id=id;
        this.cevap=cevap;
        this.gosterilen=gosterilen;
        this.cu=cu;
        this.gosterSayi=gosterSayi;
        this.dogruSayi=dogruSayi;
    }
}