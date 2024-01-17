
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3, bob4,bob5, roofObject
var bobs1,bobs2,bobs3,bobs4,bobs5
var rope1,rope2,rope3, rope4,rope5,rope6,rope7,rope8, rope9,rope10;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	

	bobs1 = new bob(320,300,46)
	bobs2 = new bob(360,300,46)
	bobs3 = new bob(400,300,46)
	bobs4 = new bob(440,300,46)
	bobs5 = new bob(480,300,46)

	roofObject=new roof(400,100,230,20);
	bob1 = new bob(320,575,46)
	bob2 = new bob(360,575,46)
	bob3 = new bob(400,575,46)
	bob4 = new bob(440,575,46)
	bob5 = new bob(480,575,46)
	
	rope1=new rope(roofObject.body,bobs1.body,-75)
	rope2=new rope(roofObject.body,bobs2.body,-35)
	rope3=new rope(roofObject.body,bobs3.body,0)
	rope4=new rope(roofObject.body,bobs4.body,35)
	rope5=new rope(roofObject.body,bobs5.body,75)

	rope6=new rope(bob1.body,bobs1.body,-75)
	rope7=new rope(bob2.body,bobs2.body,-35)
	rope8=new rope(bob3.body,bobs3.body,0)
	rope9=new rope(bob4.body,bobs4.body,35)
	rope10=new rope(bob5.body,bobs5.body,75)
	
	Engine.run(engine);
	
  
}

function draw() {
	rectMode(CENTER);
  background(237, 225, 235);
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  rope7.display();
  rope8.display();
  rope9.display();
  rope10.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  bobs1.display();
  bobs2.display();
  bobs3.display();
  bobs4.display();
  bobs5.display();
}


//ESCOLHA A OPÇÃO CORRETA PARA APLICAR UMA TECLA PRESSIONADA E ALTERAR A POSIÇÃO DO OBJETO BOLA PARA A ESQUERDA QUANDO A TECLA DE SETA PARA CIMA FOR PRESSIONADA

 function keyPressed() {
 	if (keyCode === DOWN_ARROW) {
 		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-55,y:20});
		Matter.Body.applyForce(bobs1.body,bobs1.body.position,{x:-27.5,y:-20});
 	}
 }

// function keyPressed() {
// 	if (keyCode === UP_ARROW) {
// 		Matter.Body.applyForce(bob1,bob1.position,{x:-50,y:-45});
// 	}
// }

// function keyPressed() {
// 	if (keyCode === UP_ARROW) {
// 		Matter.Body.applyForce(bob1.body,{x:-50,y:-45});
// 	}
// }

// function keyPressed() {
// 	if (keyCode === UP_ARROW) {
// 		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-40,y:-70});
// 	}
// }
