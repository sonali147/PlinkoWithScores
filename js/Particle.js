class Particle{
    constructor(x,y,r){
        var options = {
            restitution : 1.0
        }
        this.body = Bodies.circle(x,y,r, options);
        this.radius = r;
        this.color = color(random(0, 255), random(0, 255), random(0, 255))
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius, this.radius);
        pop();
    }
}
