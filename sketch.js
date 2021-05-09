const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
var engine,world;
var maximumDrops=100
var drops=[]
var umbrella; 


function preload(){
    
}

function setup(){
   engine=Engine.create()
   world=engine.world

    createCanvas(400,700)
    umbrella=new Umbrella(200,500)
    if(frameCount%150==0){
        for(var i=0; i<maximumDrops;i++){
            drops.push(new Drops(random(0,400),random(0,400)))
        }

    }

}

function draw(){
    
background(0);
Engine.update(engine)
for(var i=0; i<maximumDrops;i++){
    drops[i].display()
    drops[i].update()
    

    
}
umbrella.display()
}   

