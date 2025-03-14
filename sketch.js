//variavel personagens
var pc, pc_CostaM, pc_DireitaM, pc_EsquerdaM, pc_FrenteM, pc_CostaP, pc_DireitaP, pc_EsquerdaP, pc_FrenteP
var nerd, nerdImage

//variavel botoes
var buttonMissao1 
var backgroundImage1, backgroundImage2

//sinalizadores de movimento
var moved = true

//estados de Jogos = cena 1 = "Inicio" cena2 = "Em frente a sala de aula ou cena3 = "dentro sala de aula" cena 4 = "dentro biblioteca"
var cena = 1

//estrelas
var star, star_display
var star_img, empty_star, one_star, two_star


function preload() {
  //jogo principal
  backgroundImage1 = loadImage("mapa3.jpg");
  backgroundImage2 = loadImage("saladeaula.jpg");
  pc_FrenteP=loadAnimation("./menina/frente_m_5.png")
  nerdImage = loadImage("nerd.png")
}

function setup() {
 createCanvas(1800,1060);
 //moviemnto
 pc = createSprite(1006,900,20,30);
  
 nerd = createSprite(1215,919,20,30);
 nerd.addImage("nerd", nerdImage)
 nerd.scale = 0.2
}

function draw() 
{  
  if(cena === 1){
    background("black");
       
    
   
  
  }
  //cena 2
  if(cena === 2){
    
    
  }

  //cena 3
  if(cena === 3){
    background("white");

    
  }
  // cena 4
  if(cena === 4){
    
    
  }
  //cena 5
  if(cena === 5){
    
    
  }
  
  
  //comportamentos fora do estado de jogo
  textSize(10);
  text (mouseX + "," + mouseY, mouseX, mouseY)
  drawSprites();
}
