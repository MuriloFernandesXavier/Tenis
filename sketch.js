var brasil
var croacia
var bola
var paredes
var jogar=1
var reset
var serve=0
var gameState=serve
var reiniciar
var gameOver=3 
 var imagemReiniciar

function preload(){
 
  imagemReiniciar = loadImage("restart.png")
  
  
}


function setup(){
  createCanvas(400,400)
montarJogo()

paredes = createEdgeSprites()
  
     reiniciar = createSprite(200,320,30,30)
    reiniciar.addAnimation("reiniciar",imagemReiniciar)
      reiniciar.scale = 0.5
  
   
}

function draw(){
  background('pink')

  
  
  
  if(gameState==serve){
      bola.y = 320
  bola.x = 200
         textSize(30)
    fill('white')
     text("clique A e S  ",110,100)
  text("clique nas setas",95,300)
    
    
    if(keyDown("SPACE") ){

           bola.velocityY = -5
          bola.velocityX = -6 
      gameState = jogar
           }
    
    reiniciar.visible = false
    
    
  }
  
  
  
  if(gameState == jogar){
    
    linha.destroy()
    
    
    if(bola.y > 400 || bola.y < 0){
      
      gameState = gameOver
       
       }
    
    
    
    
 
    
     if(keyDown("left") ){

           brasil.velocityX = -5
      
           }
    
     if(keyDown("right") ){

           brasil.velocityX = 5
      
           }
  
     if(keyDown("s") ){

           croacia.velocityX = 5
      
           }
  
     if(keyDown("a") ){

           croacia.velocityX = -5
      
           }
  
       bola.bounceOff(paredes[0])

      bola.bounceOff(paredes[1])
    
    bola.bounceOff(brasil)
    
    bola.bounceOff(croacia)
    
        brasil.collide(paredes)
    
        croacia.collide(paredes)
     }else if(gameState == gameOver){
       
       reiniciar.visible = true
        
     if(bola.y > 400){
       textSize(30)
       text("You are winner croacia...",30,200)
       fimDeJogo()
   
     }  
  
    if(bola.y < 0){
       textSize(30)
       text("You are a winner , BRASIL!!!",10,200)
             fimDeJogo()
       }
       
       
       
       
    if(mousePressedOver(reiniciar) ){
       restart()
       }
              
              
              
              }
   
  drawSprites()
  
 
}


function fimDeJogo(){
   bola.velocityY = -0
       bola.velocityX = -0
       bola.destroy()
       brasil.destroy()
       croacia.destroy() 
      linha.destroy()

  
}
function restart(){
  
  gameState = serve

  reiniciar.visible = false
  montarJogo()
}

function montarJogo(){
  
    brasil = createSprite(200,350,150,10)
  croacia = createSprite(200,50,150,10)
    brasil.shapeColor = 'yellow'
croacia.shapeColor = 'white'
  linha = createSprite(200,200,400,10)
  linha.shapeColor = "white"
  bola = createSprite(200,320,20,20)
  bola.shapeColor = 'white'
}
