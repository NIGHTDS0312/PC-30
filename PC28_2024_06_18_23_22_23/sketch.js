var boundary1;
var boundary2;
var boundary3;
var boundary4;

var arthur, car1, car2, car3, car4, car5, car6, car7, car8, car9, car10, car11, car12;

var intentos = 0;

function setup(){
  createCanvas(400, 400);
  //Límites del juego
  boundary1 = createSprite(190,360,420,3);
  boundary2 = createSprite(120,260,380,3);
  boundary3 = createSprite(280,160,380,3);
  boundary4 = createSprite(190,60,420,3);
  //Crea al sprite del personaje y dale color
  arthur = createSprite(25, 310, 13, 13)
  arthur.shapeColor = "#8023cc"
  
  
  //Crea los carros que funcionarán como obstáculos y pintalos de rojo
  car1 = createSprite(100, 280, 10, 10)
  car1.shapeColor = "#0d02ab"
  car2 = createSprite(215, 280, 10, 10)
  car2.shapeColor = "#0d02ab"
  car3 = createSprite(165, 350, 10, 10)
  car3.shapeColor = "#0d02ab"
  car4 = createSprite(270, 350, 10, 10)
  car4.shapeColor = "#0d02ab"
  car5 = createSprite(100, 250, 10, 10)
  car5.shapeColor = "#0d02ab"
  car6 = createSprite(215, 250, 10, 10)
  car6.shapeColor = "#0d02ab"
  car7 = createSprite(165, 180, 10, 10)
  car7.shapeColor = "#0d02ab"
  car8 = createSprite(270, 180, 10, 10)
  car8.shapeColor = "#0d02ab"
  car9 = createSprite(100, 150, 10, 10)
  car9.shapeColor = "#0d02ab"
  car10 = createSprite(215, 150, 10, 10)
  car10.shapeColor = "#0d02ab"
  car11 = createSprite(165, 70, 10, 10)
  car11.shapeColor = "#0d02ab"
  car12 = createSprite(270, 70, 10, 10)
  car12.shapeColor = "#0d02ab"
  
  
  //Crea la variable que guardará los intentos el jugador
  
  
  
  //Agrega velocidad  para hacer que los autos  se muevan.
  car1.velocityY = 8
  car2.velocityY = 8
  car3.velocityY = -8
  car4.velocityY = -8
  car5.velocityY = 8
  car6.velocityY = 8
  car7.velocityY = -8
  car8.velocityY = -8
  car9.velocityY = 8
  car10.velocityY = 8
  car11.velocityY = -8
  car12.velocityY = -8

}

function draw() {
   background("white");
   //Muestra en la pantalla los intentos del jugador
  text("Intentos: " +intentos,175,50)
   
  strokeWeight(0);
  fill("lightblue");
  rect(0,260,52,100);
  fill("yellow");
  rect(350,60,52,100);
  
//Crea la función bounceoff para hacer que el auto rebote en los límites.
  
  car1.bounceOff(boundary1)
  car1.bounceOff(boundary2)
  car2.bounceOff(boundary1)
  car2.bounceOff(boundary2)
  car3.bounceOff(boundary1)
  car3.bounceOff(boundary2)
  car4.bounceOff(boundary1)
  car4.bounceOff(boundary2)
  car5.bounceOff(boundary2)
  car5.bounceOff(boundary3)
  car6.bounceOff(boundary2)
  car6.bounceOff(boundary3)
  car7.bounceOff(boundary2)
  car7.bounceOff(boundary3)
  car8.bounceOff(boundary2)
  car8.bounceOff(boundary3)
  car9.bounceOff(boundary4)
  car9.bounceOff(boundary3)
  car10.bounceOff(boundary4)
  car10.bounceOff(boundary3)
  car11.bounceOff(boundary4)
  car11.bounceOff(boundary3)
  car12.bounceOff(boundary4)
  car12.bounceOff(boundary3)
  
//Agregar la condición para hacer que Sam se mueva de izquiera a derecha.
   
     if(keyDown("right")){
     
     arthur.x = arthur.x+2
     
     }
  
     if(keyDown("left")){
     
     arthur.x = arthur.x-2
     
     }
  
  if(keyDown("up")){
     
     arthur.y = arthur.y-2
     
     }
  
     if(keyDown("down")){
     
     arthur.y = arthur.y+2
     
     }
  
     if(arthur.isTouching(car1) || arthur.isTouching(car2) ||           arthur.isTouching(car3) || arthur.isTouching(car4)){
     
     arthur.x = 25
     arthur.y = 310
     intentos = intentos+1
       
     }
  
//Agregar la condición de reducir la vida de Sam si toca el carro.
  
 drawSprites();
}
