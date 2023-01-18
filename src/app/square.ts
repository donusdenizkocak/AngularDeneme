export class Square {

    constructor(private ctx: CanvasRenderingContext2D, private x: number, private y: number, private yukseklik: number, private color:string ) { }

    moveRight() {
      this.x+=30;
      this.draw();
    }

    public draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x,this.y, 50, this.yukseklik);
    }
  }
