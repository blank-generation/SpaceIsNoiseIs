
let pg;
let f;
let sh;

let rw,rh;

function preload(){

    sh = loadShader('vshader.vert','fshader.frag');
    
}


function setup() {
    let cnv =createCanvas(window.innerWidth,window.innerHeight);
    cnv.parent("main");
    pg = createGraphics(width, height, WEBGL);
    sh.setUniform("u_resolution", [width,height]);
    f = loadFont("steppes.ttf");
    rectMode(CENTER);
 
    //imageMode(CENTER);
   
  }
  
  function draw() {
  background(255,5);
  
    sh.setUniform("u_time",frameCount/60.0);
    pg.shader(sh);
    //pg.rectMode(CENTER);
    //pg.strokeWeight(5);
  
      pg.clear;
      pg.strokeWeight(5);
      pg.ellipse(0,0,height,height);

  


    for(var i = 0; i<10; i++){
      
    image(pg, noise(i*width*498290384*random(2))*mouseX, noise(i*height*42342132*random(2))*mouseY , noise(i*5)*height/2,noise(i*5)*height/2);
  }
    textFont(f);
    //rect(0, 0, 200, 200);

    var phr = 'SPACE IS NOISE IS ' ; 
    
    textAlign(LEFT);
    fill(255 * sin(frameCount*0.01)+1/2);
   // translate(width/2, height/2);
   // rotate(frameCount*0.01)
    for (var i =0;i<20; i++){
      textSize(noise(i*200)*60);
      
      text(phr.repeat(8), -width * (sin(frameCount *0.003*i/2)+1)/2 , i/20 * height);
      
    }

    ;
 
  }