class Road{
    constructor(x,width,laneCount=3){
        this.x=x;
        this.width=width;
        this.laneCount=laneCount;

        this.left=x-width/2;
        this.right=x+width/2;

        const infinity=100000000;
        this.top=-infinity;
        this.botton=infinity;
    }

    draw(ctx){
        ctx.lineWidth=5;
        ctx.strokeStyle="white";

        ctx.beginPath();
        ctx.moveTo(this.right,this.top);
        ctx.lineTo(this.left,this.botton);
        ctx.stroke();
    }
}