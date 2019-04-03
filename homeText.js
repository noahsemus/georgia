let customText, visText;
let xPos;

function preload(){
    customText = loadFont('assets/myFont.otf')
}

function setup(){
    createCanvas(windowWidth, windowHeight/2);
    background(0);
    textFont(customText);
    textSize(windowWidth/10);
    
    xPos = windowWidth;
}

function draw(){
    
    visText = 'Power is not a means, it is an end. One does not establish a dictatorship in order to safeguard a revolution; one makes the revolution in order to establish the dictatorship.';
    
    xPos = xPos - 3;
    
    fill(0,0,0,60);
    noStroke();
    rect(0,0,width,height);
    
    //fill(0);
    noFill();
    stroke(255,255,0, mouseY);
    text(visText, xPos, windowHeight/2);
       
    let w = textWidth(visText);
    
    if(xPos < -w){
        xPos = windowWidth;
    }
}

function windowResized() {
    resizeCanvas (windowWidth, windowHeight); 
}