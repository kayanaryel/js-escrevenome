//variaveis da bolinha
let xbolinha = 300;
let ybolinha = 200;
let diametro = 20;

//velocidade da bolinha
let velocidadexbolinha = 6;
let velocidadeybolinha = 6;
let raio = diametro / 2;

//variaveis da raquete
let xraquete = 5;
let yraquete = 130;
let raquetecomprimento = 8;
let raquetealtura = 120
let colidiu = false;

//variaveis do oponente
let xraqueteoponente = 585;
let yraqueteoponente = 150;
let velocidadeyoponente;

//placar do jogo
let meuspontos = 0;
let pontosdooponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("pontos.mp3");
  raquetada = loadSound("raquetada.mp3");
}

//cenario do jogo
function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostrabolinha();
  movimentabolinha();
  verificacolisaoborda();
  mostraraquete(xraquete, yraquete);
  movimentaminharaquete();
  //verificacolisaoraquete();
  verificacolicaoraquete(xraquete, yraquete);
  mostraraquete(xraqueteoponente,yraqueteoponente);
  movimentaraqueteoponente();
  incluirplacar();
  marcaponto();
  bolinhaNaoFicaPresa();
  verificacolicaoraquete(xraqueteoponente,yraqueteoponente);
  }
function mostrabolinha(){
  circle(xbolinha, ybolinha, diametro);
}

function movimentabolinha(){
  xbolinha += velocidadexbolinha;
  ybolinha += velocidadeybolinha;}

function verificacolisaoborda(){
  if (xbolinha + raio > width ||
     xbolinha - raio < 0){
    velocidadexbolinha *= -1;
  }
  if (ybolinha + raio > height ||
     ybolinha - raio < 0){
    velocidadeybolinha *= -1
  }

}
function mostraraquete(x,y){
  rect(x, y, raquetecomprimento, raquetealtura)
}

function movimentaminharaquete(){
  if (keyIsDown(UP_ARROW)){
    yraquete -= 10
  }
  if (keyIsDown(DOWN_ARROW)){
    yraquete += 10}
}

function verificacolisaoraquete() {
  if (xbolinha - raio < xraquete + raquetecomprimento
     && ybolinha - raio < yraquete + raquetealtura 
      && ybolinha + raio > yraquete) {
    velocidadexbolinha *= -1;
    raqueteda.play()
  }
}

function verificacolicaoraquete(x ,y ){
 colidiu = 
  collideRectCircle( x, y, raquetecomprimento, raquetealtura, xbolinha, ybolinha, raio);
  if (colidiu){
  velocidadexbolinha*= -1  
 raquetada.play()  }
  
}

function movimentaraqueteoponente(){
 velocidadeyoponente = ybolinha -yraqueteoponente - raquetecomprimento / 2 -30 
  yraqueteoponente += velocidadeyoponente
}

function incluirplacar(){
 stroke(255)
    textAlign(CENTER);
    textSize(16);
    fill(color(255,140, 0));
    rect(150, 10, 40, 20);
  fill(255)
  text(meuspontos,170,26);
  fill(color(255,140, 0));
    rect(450, 10, 40, 20);
    fill(255);
  text(pontosdooponente,470,26)
}

function marcaponto(){
  if (xbolinha > 590){
    meuspontos += 1
    ponto.play();
  }
  if (xbolinha < 7){
    pontosdooponente += 1;
    ponto.play();
  }
}
function bolinhaNaoFicaPresa(){
    if (xbolinha - raio < 0){
    xbolinha = 23
    }
}
