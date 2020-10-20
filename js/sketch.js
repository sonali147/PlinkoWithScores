const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Constraint = Matter.Constraint;

var engine, world;
var ground;
var divisions = [];
var particles = [];
var plinko = [];
var leftEdge, rightEdge;

function setup(){
    createCanvas(480,600);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2, height, width, 20);
    leftEdge = new Ground(-5,height/2,10,height);
    rightEdge = new Ground(width+5,height/2,10,height);
    
    //divisions
    for(var i=0;i<8;i++){
        divisions.push(new Ground(80*i, 525, 10, 150))
    }

    //plinko
    for(var i=1;i<20;i++){
        plinko.push(new Plinko(24*i, 30, 5))
        plinko.push(new Plinko(24*i, 110, 5))
        plinko.push(new Plinko(24*i, 190, 5))
        plinko.push(new Plinko(24*i, 270, 5))   
        plinko.push(new Plinko(24*i, 350, 5))
    }  

    for(var i=1.5;i<19;i++){
        plinko.push(new Plinko(24*i, 70, 5))
        plinko.push(new Plinko(24*i, 150, 5))
        plinko.push(new Plinko(24*i, 230, 5))
        plinko.push(new Plinko(24*i, 310, 5))
        plinko.push(new Plinko(24*i, 390, 5))
    }
    

}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    leftEdge.display();
    rightEdge.display();
    for(var i=0; i<divisions.length; i++){
        divisions[i].display();
    }

    for(var i=0; i<plinko.length; i++){
        plinko[i].display();
    }

    createParticles();

    for(var i=0; i<particles.length; i++){
        particles[i].display();
    }

    //text("X:" + mouseX + ", Y:" + mouseY, mouseX, mouseY);
    
}

function createParticles(){
    if(frameCount % 80 === 0){
        particles.push(new Particle(random(10,470), 0, 5));
    }
}
