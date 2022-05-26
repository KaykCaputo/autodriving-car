class Road{
    constructor(x,width,laneCount=4){
        this.x=x;
        this.width=width;
        this.laneCount=laneCount;

        this.left=x-width/2;
        this.right=x+width/2;

        const infinity=100000000;
        this.top=-infinity;
        this.botton=infinity;
    }

    getLaneCenter(laneIndex){
        const lineWidth=this.width/this.laneCount;
        return this.left+lineWidth/²+laneIndex*lineWidth;
    }
    draw(ctx){
        ctx.lineWidth=5;
        ctx.strokeStyle="white";
        for(let i=0;i<this.laneCount;i++){
            const x = lerp(
                this.left,
                this.right,
                i/this.laneCount
            );
        }
        if(i>0 && i<this.laneCount){
            ctx.setLineDash([20,20]);
        }else{
            ctx.setLineDash([]);
        }
        ctx.beginPath();
        ctx.moveTo(x,this.top);
        ctx.lineTo(x,this.botton);
        ctx.stroke();

    }
}

