export class jsonplaceholderModel{
    constructor(){

    }
}

export class Data{
    userId:number;
    id:number;
    title:string;
    body:string;

    constructor( userId:number, id:number, title:string, body:string){
        this.userId=userId;
        this.id=id;
        this.title=title;
        this.body=body;
    }
}
export class SayilarModel{
    no:number;
    text:string;

    constructor(no:number,text:string){
        this.no=no;
        this.text=text;
    }
}