//variavel personagens
var pc, pc_CostaM, pc_DireitaM, pc_EsquerdaM, pc_FrenteM, pc_CostaP, pc_DireitaP, pc_EsquerdaP, pc_FrenteP
var nerd, nerdImage

//variavel botoes
var buttonMissao1, buttonSalaAula, buttonBiblioteca, buttonSalaAulaImg, buttonBibliotecaImg
var backgroundImage1, backgroundImage2

//sinalizadores de movimento
var moved = true

//estados de Jogos = cena 1 = "Inicio" cena2 = "Em frente a sala de aula ou cena3 = "dentro sala de aula" cena 4 = "dentro biblioteca"
var cena = 1
var passou = false
//estrelas
var star, star_display
var star_img, empty_star, one_star, two_star

//jogo pegue os numeros
var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;

//Estados do Jogo
var PLAY=1;
var END=0;
var WIN=2;
var gameState=1;

function preload() {
  //jogo principal
  backgroundImage1 = loadImage("mapa3.jpg");
  backgroundImage2 = loadImage("saladeaula.jpg");
  pc_CostaP = loadAnimation("./menina/costa_m_1.png")
  pc_DireitaP = loadAnimation("./menina/direita_m_2.png")
  pc_EsquerdaP = loadAnimation("./menina/esquerda_m_2.png")
  pc_FrenteP=loadAnimation("./menina/frente_m_5.png")
  //pc_CostaM = loadAnimation("m_costa1.png", "m_costa1.png", "m_costa1.png", "m_costa1.png", "m_costa2.png", "m_costa2.png","m_costa2.png","m_costa2.png")
  pc_CostaM = loadAnimation("./menina/costa_m_1.png","./menina/costa_m_1.png", "./menina/costa_m_2.png", "./menina/costa_m_2.png")
  pc_DireitaM = loadAnimation("./menina/direita_m_1.png", "./menina/direita_m_2.png", "./menina/direita_m_3.png")
  pc_EsquerdaM = loadAnimation("./menina/esquerda_m_1.png", "./menina/esquerda_m_2.png", "./menina/esquerda_m_3.png")
  pc_FrenteM = loadAnimation("./menina/frente_m_1.png", "./menina/frente_m_2.png","./menina/frente_m_3.png","./menina/frente_m_4.png","./menina/frente_m_5.png", "./menina/frente_m_6.png", "./menina/frente_m_7.png")
  nerdImage = loadImage("nerd.png")

  star_img = loadImage('star.png');
  empty_star = loadAnimation("empty.png");
  one_star = loadAnimation("one_star.png");
  two_star = loadAnimation("stars.png");
  

  //jogo pegue os numeros
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("fimdeJogo.png");
}

function setup() {
 createCanvas(1800,1060);
 //moviemnto
 pc = createSprite(1006,900,20,30);
 pc.addAnimation("costa", pc_CostaM);
 pc.addAnimation("direita", pc_DireitaM);
 pc.addAnimation("esquerda", pc_EsquerdaM);
 pc.addAnimation("frente", pc_FrenteM);
 //parados
 pc.addAnimation("costaP", pc_CostaP);
 pc.addAnimation("direitaP", pc_DireitaP);
 pc.addAnimation("esquerdaP", pc_EsquerdaP);
 pc.addAnimation("frenteP", pc_FrenteP);
 pc.changeAnimation("costa")
 pc.scale = 0.23
 
 nerd = createSprite(1215,919,20,30);
 nerd.addImage("nerd", nerdImage)
 nerd.scale = 0.2

 buttonMissao1 =  createSprite(323,970,20,30);
 buttonMissao1.shapeColor = "red"
 buttonMissao1.visible = false

 buttonSalaAula =  createSprite(470,727,20,30);
 buttonSalaAula.shapeColor = "red"
 buttonSalaAula.visible = false

 buttonBiblioteca = createSprite(1090,727,20,30);
 buttonBiblioteca.shapeColor = "yellow"
 buttonBiblioteca.visible = false

 star_display = createSprite(100,20,30,30);
 star_display.scale = 0.2;
 star_display.addAnimation('empty',empty_star);
 star_display.addAnimation('one',one_star);
 star_display.addAnimation('two',two_star);
 star_display.changeAnimation('empty');

 star = createSprite(902,666,20,20);
 star.addImage(star_img);
 star.scale=0.1;
 star.visible = false

 //jogo 2 pegue os numeros
 // Fundo se movendo
path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;
path.visible = false


//criando menino correndo
boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
boy.visible = false
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();


}

function draw() 
{  
  if(cena === 1){
    background("black");
    push()
    //image(backgroundImage, -width+800, -height+400, width, height);
    image(backgroundImage1, 0, 0, 1800,1030);
    pop()
    
    //movimentos jogador
     
    //camera.position.y = npc.y
    //camera.position.x = box.x

    //colisão com o Nerd
    if(pc.collide(nerd)){
      moved = false
      pc.x = pc.x - 50
      pc.changeAnimation("frente")
      
      console.log(pc.x)
      $(document).ready(function () {
        displayBot()
      })
      
      buttonMissao1.visible = true
      
    }
    //se pressionar o botão missao 1
    if(mousePressedOver(buttonMissao1)){
      missao1()
      buttonMissao1.visible = false
      moved = true

    }
    if( pc.x === 716 && pc.y === 632){
      cena = 2
    }
  }
  //cena 2
  if(cena === 2){
    background("white");

    push()
    //image(backgroundImage, -width+800, -height+400, width, height);
    image(backgroundImage2, 0, 0, 1800,1030);
    pop()
    moved = false
    //pc.visible = true
    if(pc.x === 716 && pc.y === 632){
      pc.x=810
      pc.y=700
    }
    
    //pc.visible = false
    nerd.visible = false
    star.visible = false
    
    buttonSalaAula.visible = true
    
    buttonBiblioteca.visible = true
    
    if(mousePressedOver(buttonSalaAula) && passou===false){
      console.log("clicou")
      if(pc.x === 810 && pc.y === 700){
        pc.velocityX = -4
        sizeAnimationEsquerda()
      }
    }
    if(mousePressedOver(buttonBiblioteca)){
      console.log("clicou")
      if(pc.x === 810 && pc.y === 700){
        pc.velocityX = 2
        sizeAnimationDireita()
      }
    }  
    if(pc.isTouching(buttonSalaAula)){
      pc.velocityX = 0
      cena = 3
    }
    if(pc.isTouching(buttonBiblioteca)){
      pc.velocityX = 0
      cena = 4
    }
    
  }

  //cena 3 jogo pegue os numeros
  if(cena === 3){
    background("white");

   
    pc.visible = false
    nerd.visible = false
    path.visible = true
    boy.visible = true
    buttonBiblioteca.visible = false
    buttonSalaAula.visible = false
    
    if(gameState===PLAY){
      background(255);
      boy.x = World.mouseX;
      
      edges= createEdgeSprites();
      boy.collide(edges);
      
      //código para redefinir o fundo
      if(path.y > height ){
        path.y = height/2;
      }
      
        createCash();
        createDiamonds();
        createJwellery();
        createSword();
    
        if (cashG.isTouching(boy)) {
          cashG.destroyEach();
          treasureCollection=treasureCollection + 50;
        }
        else if (diamondsG.isTouching(boy)) {
          diamondsG.destroyEach();
          treasureCollection=treasureCollection + 100;
          
        }else if(jwelleryG.isTouching(boy)) {
          jwelleryG.destroyEach();
          treasureCollection= treasureCollection + 150;
          
        }else{
          if(swordGroup.isTouching(boy) || treasureCollection > 100) {
            gameState=END;
          }
        }
        
      
    }
    if(gameState===END){
      if(treasureCollection > 100){
        star.visible = true;
        
        star_display.changeAnimation('one');
      
        setTimeout(() => {
          passou = true
          boy.visible = false
          pc.visible = true
          pc.x=810
          pc.y=700
          pc.changeAnimation("costaP")
          pc.scale = 0.2
          cena = 2
        }, 2000);
          
       


      }
        boy.addAnimation("SahilRunning",endImg);
        path.visible=false
              boy.x=width/2;
              boy.y=height/2;
              boy.scale=0.6;
              
              cashG.destroyEach();
              diamondsG.destroyEach();
              jwelleryG.destroyEach();
              swordGroup.destroyEach();
              
              cashG.setVelocityYEach(0);
              diamondsG.setVelocityYEach(0);
              jwelleryG.setVelocityYEach(0);
              swordGroup.setVelocityYEach(0);
    }
    textSize(20);
    fill(0);
    text("Tesouros: "+ treasureCollection,width-250,30);

    
  }
  // cena 4

  if(cena === 4){
    background("white");

    push()
    //image(backgroundImage, -width+800, -height+400, width, height);
    image(backgroundImage2, 0, 0, 1800,1030);
    pop()

    pc.x = 812
    pc.y = 700
    nerd.visible = false
    buttonBiblioteca.visible = true
    buttonSalaAula.visible = true

    
  }
  
  //comportamentos fora do estado de jogo
  if(moved === true){
    if(keyWentDown("up")){
      pc.y -= 15
      sizeAnimationCosta()
    }
    else if(keyWentUp("up")){
      pc.changeAnimation("costaP")
    }

    if(keyWentDown("down")){
      pc.y += 15
      sizeAnimationFrente()
    }
    else if(keyWentUp("down")){
      pc.changeAnimation("frenteP")
    }

    if(keyWentDown("left")){
      pc.x -= 15
      sizeAnimationEsquerda()
    }
    else if(keyWentUp("left")){
      pc.changeAnimation("esquerdaP")
    }

    if(keyWentDown("right")){
      pc.x += 15
      sizeAnimationDireita()
    }
    else if(keyWentUp("right")){
      pc.changeAnimation("direitaP")
    }
  }
  textSize(10);
  text (mouseX + "," + mouseY, mouseX, mouseY)
  drawSprites();
}

//ctrl +s

function displayBot() {
  
      $('.chatbox__chat').toggle()
  
  
}

function missao1()
{
 displayBot()
 pc.changeAnimation("costa") 
 pc.scale = 0.2
 pc.x = 716
 pc.y = 632
}

function jogoSaladeAula(){

}

function jogoBiblioteca(){

}

function sizeAnimationCosta(){
  pc.changeAnimation("costa")
    pc.scale = 0.2
}
function sizeAnimationFrente(){
  pc.changeAnimation("frente")
    pc.scale = 0.4
}
function sizeAnimationEsquerda(){
  pc.changeAnimation("esquerda")
    pc.scale = 0.4
}
function sizeAnimationDireita(){
  pc.changeAnimation("direita")
    pc.scale = 0.4
}

//funções jogo 2
function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 5;
  cash.lifetime = 200;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, width-50),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 5;
  diamonds.lifetime = 200;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, width-50),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 5;
  jwellery.lifetime = 200;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, width-50),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 6;
  sword.lifetime = 200;
  swordGroup.add(sword);
  }
}  