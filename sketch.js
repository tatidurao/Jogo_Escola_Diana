//variavel personagens
var pc, pc_CostaM, pc_DireitaM, pc_EsquerdaM, pc_FrenteM, pc_CostaP, pc_DireitaP, pc_EsquerdaP, pc_FrenteP;
var nerd, nerdImage;

//variavel botoes
var buttonMissao1, buttonMissao1Image, buttonMissao2Image,buttonMissao3Image, botaosaladeaula, botaoBiblioteca;
var backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4,backgroundImage5;

//sinalizadores de movimento
var moved = true;

//estados de Jogos = cena 1 = "Inicio" cena2 = "Em frente a sala de aula ou cena3 = "dentro sala de aula" cena 4 = "dentro biblioteca" 5=final do jogo
var cena = 1;

//estrelas
var star, star_display;
var star_img, empty_star, one_star, two_star;

//jogo da soma
var number1, number5,number9,number0, number1Img, number5Img, number9Img,number0Img;
var number1Group, number5Group, number9Group, number0Group;
var meta = 10;
var pontos = 0;
var girl, girlImg;
var PLAY=1;
var END=0;
var gameState=1;

function preload() {
  //imagens do Jogo
  backgroundImage1 = loadImage("./cenas/cena1.jpg");
  backgroundImage2 = loadImage("./cenas/cena2.jpg");
  backgroundImage3 = loadImage("./cenas/cena3.png");
  backgroundImage5 = loadImage("./cenas/cena5.jpg");

  //jogador principal
  pc_CostaM=loadAnimation("./menina/costa_1.png","./menina/costa_2.png", "./menina/costa_3.png")
  pc_DireitaM=loadAnimation("./menina/direita_m_1.png","./menina/direita_m_2.png","./menina/direita_m_3.png")
  pc_EsquerdaM=loadAnimation("./menina/esquerda_m_1.png","./menina/esquerda_m_2.png","./menina/esquerda_m_3.png")
  pc_FrenteM=loadAnimation("./menina/frente_m_1.png","./menina/frente_m_2.png","./menina/frente_m_3.png","./menina/frente_m_4.png","./menina/frente_m_5.png","./menina/frente_m_6.png","./menina/frente_m_7.png")

  pc_FrenteP=loadAnimation("./menina/frente_m_5.png")
  pc_CostaP = loadAnimation ("./menina/costa_1.png")
  pc_EsquerdaP = loadAnimation ("./menina/esquerda_m_1.png")
  pc_DireitaP = loadAnimation ("./menina/direita_m_1.png")

  //npc nao jogador
  nerdImage = loadImage("./nerd/nerd.png")

  //botões
  buttonMissao1Image=loadImage("./sinalizadores/botao_cena1.png")
  buttonMissao2Image=loadImage("./sinalizadores/botaoSala.png")
  buttonMissao3Image=loadImage("./sinalizadores/botaoBiblioteca.png")
  //placar das estrelas
  empty_star=loadAnimation("./sinalizadores/empty.png")
  one_star=loadAnimation("./sinalizadores/one_star.png")
  two_star=loadAnimation("./sinalizadores/stars.png")
  star_img=loadImage("./sinalizadores/star.png")
  endImg =loadAnimation("./sinalizadores/fimdeJogo.png");

  //Jogo sala de aula
  girlImg = loadAnimation("Runner-1.png","Runner-2.png");
  //number1Img = loadImage("");
  //number5Img = loadImage("");
  //number9Img = loadImage("");
  //number0Img = loadImage("");
  
}

function setup() {
 createCanvas(700,600);
 //moviemnto
 pc = createSprite(420,500,20,30);
 pc.addAnimation("costa",pc_CostaM)
 pc.addAnimation("direita",pc_DireitaM)
 pc.addAnimation("esquerda",pc_EsquerdaM)
 pc.addAnimation("frente",pc_FrenteM)
 pc.addAnimation("pc_CostaP",pc_CostaP)
 pc.addAnimation("pc_EsquerdaP",pc_EsquerdaP)
 pc.addAnimation("pc_DireitaP",pc_DireitaP)
 pc.addAnimation("pc_FrenteP",pc_FrenteP)
 pc.changeAnimation("pc_FrenteP")
 pc.scale=0.4

 nerd = createSprite(490,500,20,30);
 nerd.addImage("nerd", nerdImage)
 nerd.scale = 0.6

 buttonMissao1=createSprite(300,520)
 buttonMissao1.addImage("botaocena1", buttonMissao1Image)
 buttonMissao1.visible=false
 buttonMissao1.scale = 0.5
 
 botaosaladeaula=createSprite(350,450)
 botaosaladeaula.scale = 0.5
 botaosaladeaula.visible=false
 botaosaladeaula.addImage("bot", buttonMissao2Image)
 
 botaoBiblioteca=createSprite(480,450)
 botaoBiblioteca.scale = 0.5
 botaoBiblioteca.visible=false
 botaoBiblioteca.addImage("botaoD", buttonMissao3Image)

 star_display=createSprite(70,40)
 star_display.addAnimation("empty",empty_star)
 star_display.addAnimation("onestar",one_star)
 star_display.addAnimation("twostar",two_star)
 star_display.changeAnimation("empty")
 star_display.scale=0.2

 //criar sprite personagem do jogo das somas
 //add animação
 //velocity Y - 4
 //ocutar a visibilidade

 //criar grupos de numeros

}

function draw() 
{  
  if(cena === 1){
    background(backgroundImage1);

   //colisão com o nerd
   if(pc.collide(nerd)){
    moved=false //desabilitar controles do jogador
    buttonMissao1.visible=true //mostrar botão
    pc.x=pc.x-50 //colocar jogador ao lado do nerd
    pc.changeAnimation("pc_FrenteP") //mudar animação
    pc.scale = 0.4
    //abrir janela de chat
    $(document).ready(function () {
      displayBot()
    })
   }
   //ações ao clicar no botão start
   if(mousePressedOver(buttonMissao1)){
    buttonMissao1.visible = false //esconder botão
    displayBot() //fechar chat
    pc.changeAnimation("pc_FrenteP") //mudar animação
    pc.scale = 0.4
    pc.x = 420
    pc.y = 420
    console.log(cena)
  }
  if(pc.x===420&&pc.y===420){
    cena=2
    console.log(cena)
  }
  }
  //cena 2
  if(cena === 2){ 

    background(backgroundImage2)
    nerd.visible=false //esconder nerd
    moved=false //desabailitar controles do jogador
    botaosaladeaula.visible=true //mostrar botao
    botaoBiblioteca.visible=true //mostrar botao

     //se pressionar o botao da sala de aula
    if(mousePressedOver(botaosaladeaula)){
        cena=3 //sala de aula
        console.log(cena)   
    }
    //se pressionar o botao da biblioteca
    if(mousePressedOver(botaoBiblioteca)){
        cena=4 //biblioteca
        console.log(cena)
     }

  }

  //cena 3
  if(cena === 3){
    //backgroundImage3
    background("white");
    //esconder nerd
    //esconder pc
    //mostrar personagem jogador jogo das somas
    //esconder botão biblioteca e sala de aula

    //estados de jogos PLAY E END

    //pontuação
    textSize(20);
    fill(0);
    text("Meta: "+ meta,550,30);
    //text pontos
  }
  // cena 4
  if(cena === 4){
    
    
  }
  //cena 5
  if(cena === 5){
    
    
  }

  //controles do jogador
  if(moved===true){
   if(keyWentDown(UP_ARROW)){
    pc.velocityY=-2
    pc.changeAnimation("costa")
    pc.scale=0.222
   }
   else if (keyWentUp(UP_ARROW)){
    pc.velocityY=0
    pc.changeAnimation("pc_CostaP")
   }
   if(keyWentDown(DOWN_ARROW)){
    pc.velocityY=2
    pc.scale=0.4
    pc.changeAnimation("frente")
   }
   else if (keyWentUp(DOWN_ARROW)){
    pc.velocityY=0
    pc.changeAnimation("pc_FrenteP")
   }
   if(keyWentDown(LEFT_ARROW)){
    pc.velocityX=-2
    pc.scale=0.4
    pc.changeAnimation("esquerda")
   }
   else if (keyWentUp(LEFT_ARROW)){
    pc.velocityX=0
    pc.changeAnimation("pc_EsquerdaP")
   }
   
   if(keyWentDown(RIGHT_ARROW)){
    pc.velocityX=2
    pc.scale=0.4
    pc.changeAnimation("direita")
   }
   else if (keyWentUp(RIGHT_ARROW)){
    pc.velocityX=0
    pc.changeAnimation("pc_DireitaP")
   }
  }

  
  //comportamentos fora do estado de jogo
  textSize(10);
  text (mouseX + "," + mouseY, mouseX, mouseY)
  drawSprites();
}
//abrir janela de chat
function displayBot() {
  $('.chatbox__chat').toggle()
}