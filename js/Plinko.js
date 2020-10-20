class Plinko{
    constructor(x,y,r){
        var options = {
            isStatic : true
        }
        this.body = Bodies.circle(x,y,r, options);
        this.radius = r;
        //this.color = color(random(0, 255), random(0, 255), random(0, 255))
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        fill(255);
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius, this.radius);
        pop();
    }
}
