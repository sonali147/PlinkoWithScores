const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Constraint = Matter.Constraint;

var engine, world;
var ground;
var divisions = [];
//var particles = [];
var particle;
var turn = 0;
var plinko = [];
var leftEdge, rightEdge;
var gameState = "serve";
var score = 0;

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
    for(var i=0;i<20;i=i+1.5){
        //plinko.push(new Plinko(24*i, 30, 5))
        plinko.push(new Plinko(24*i, 110, 5))
        plinko.push(new Plinko(24*i, 190, 5))
        plinko.push(new Plinko(24*i, 270, 5))   
        plinko.push(new Plinko(24*i, 350, 5))

        plinko.push(new Plinko(24*(i+0.5), 70, 5))
        plinko.push(new Plinko(24*(i+0.5), 150, 5))
        plinko.push(new Plinko(24*(i+0.5), 230, 5))
        plinko.push(new Plinko(24*(i+0.5), 310, 5))
        plinko.push(new Plinko(24*(i+0.5), 390, 5))
    }  
    
}

function draw(){
    background(0);
    Engine.update(engine);
    fill("white");
    textSize(20);
    text("SCORE: " + score, 10, 40);

    for(var i=0;i<12;i+=2){
        textSize(15);
        if(i < 4){
            var str = "500";
        } else if(i >= 4 && i < 8) {
            var str = "200";
        } else {
            var str = "100";
        }
        text(str, (i+1)*40-10, 470);
    }

    push();
    stroke("yellow");
    strokeWeight(5);
    line(0,420,480,420);
    pop();

    ground.display();
    leftEdge.display();
    rightEdge.display();
    for(var i=0; i<divisions.length; i++){
        divisions[i].display();
    }

    for(var i=0; i<plinko.length; i++){
        plinko[i].display();
    }
    if (turn > 0){
        if(particle != null){
            particle.display();
    
            if(particle.body.position.x < 160 && particle.body.position.y > 420){
                score += 500;
                particle = null;
                gameState = "serve";
                if(turn === 5){
                    gameState = "end";
                }
            } else if(particle.body.position.x >= 160 && particle.body.position.x < 320  && particle.body.position.y > 420){
                score += 100;
                particle = null;
                gameState = "serve";
                if(turn === 5){
                    gameState = "end";
                }
            } else if(particle.body.position.x >= 320 && particle.body.position.y > 420){
                score += 200;
                particle = null;
                gameState = "serve";
                if(turn === 5){
                    gameState = "end";
                }
            }
        }

        if(turn === 5){
            push();
            fill("white");
            stroke("yellow");
            textSize(50);
            text("Game Over", 120, 200);
            pop();
        }
    }
    

}

function mousePressed(){
    if (gameState === "serve"){
        turn += 1;
        particle = new Particle(mouseX, 0, 5);
        gameState = "play";
    }
}
