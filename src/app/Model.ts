export class Model{

}
export class ProductModel{
    id:number;
    brand:string;
    model:string;
    processor:string;
    ram:string;
    price:number;
    image:string;

    constructor( id:number, brand:string,model:string, processor:string,ram:string,price:number,image:string){
        this.id=id;
        this.brand=brand;
        this.model=model;
        this.processor=processor;
        this.ram=ram;
        this.price=price;
        this.image=image;
    }
}

export class MarkaModel{
    id:number;
    name:string;
    logo:string;

    constructor(id:number,name:string,gorsel:string){
        this.id=id;
        this.name=name;
        this.logo=gorsel;
    }
}
export class ogrenci{
    id:number;
    isim:string;
    soyisim:string;
    okulno:number;
    sinif:string;
    cinsiyet:string;
    dersler:Array<ders>;

    constructor(id:number,isim:string,soyisim:string,okulno:number,sinif:string,cinsiyet:string,dersler:ders[]){
        this.id=id;
        this.isim=isim;
        this.soyisim=soyisim;
        this.okulno=okulno;
        this.sinif=sinif;
        this.cinsiyet=cinsiyet;
        this.dersler=[
            new ders(1,"Matematik",6,"Ayfer Sağlamtaş"),
            new ders(2,"Edebiyat",4,"Barış Bekdaş"),
            new ders(3,"Tarih",2,"Elif Nur Artar"),
            new ders(4,"Cografya",2,"Gülnihal Çalışkan"),
            new ders(5,"Kimya",2,"Ferit Akyürek"),
            new ders(6,"Fizik",2,"Ayşe Ceren Yakut")
        ];

    }
}

export class ders{
    id:number;
    name:string;
    hds:number;
    ogretmen:string;

    constructor(id:number,name:string,hds:number,ogretmen:string){
        this.id=id;
        this.name=name;
        this.hds=hds;
        this.ogretmen=ogretmen;
    }
}

export class ayliksatis{
    ayadi:string;
    satis:number;
    yuzde:number;
    genislik:number;

    constructor(ayadi:string,satis:number,yuzde:number,genislik:number){
        this.ayadi=ayadi;
        this.satis=satis;
        this.yuzde=yuzde;
        this.genislik=genislik;
    }
}
export class takim{
    takimadi:string;
    taraftar:number;
    yuzde:number;
    

    constructor( takimadi:string,taraftar:number,yuzde:number){
        this.takimadi=takimadi;
        this.taraftar=taraftar;
        this.yuzde=yuzde;
       
    }
}
export class ProductModel2{
    id:number;
    brand:string;
    model:string;
    processor:string;
    ram:string;
    price:number;
    image:string;
    ucretsizkargo:boolean;
    stok:number;

    constructor( id:number, brand:string,model:string, processor:string,ram:string,price:number,image:string,ucretsizkargo:boolean,stok:number){
        this.id=id;
        this.brand=brand;
        this.model=model;
        this.processor=processor;
        this.ram=ram;
        this.price=price;
        this.image=image;
        this.ucretsizkargo=ucretsizkargo;
        this.stok=stok;
    }
}