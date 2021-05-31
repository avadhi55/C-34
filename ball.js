class Ball {
    constructor (x,y,r){
        var options = {
            density:1,
            frictionAir:0.005
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}