var centerX = 250;
var centerY = 250;

var bgImage;
var carnivalButton;
var party;
var carnival;
var partyButton;


function preload() {
carnival = loadImage("assets/carnival.jpg")
party = loadImage("assets/party.jpg")
}

function setup() {
    createCanvas(500, 500);
    bgimage = carnival;
    carnivalButton = createButton("Going to Carnival");
    carnivalButton.position(10,10)
    carnivalButton.mousePressed(function(){
        bgimage = carnival;
    });
    partyButton = createButton("Let's Party!!!");
    partyButton.position(120,10);
    partyButton.mousePressed(function(){
      bgImage = party;

});

}


function draw() {
background (255)
image(bgimage,0,0)

  fill(255, 255, 255);

  strokeWeight(1);
  //face
  ellipse(centerX, centerY, 100, 100);
  //nose
  ellipse(centerX, centerY + 10, 20, 20);
  //eyse
  ellipse(centerX - 10, centerY - 10, 10, 20);
  ellipse(centerX + 10, centerY - 10, 10, 20);
  rectMode(CENTER);
  rect(centerX, centerY + 30, 50, 15, 5);
  rect(centerX, centerY + 30, 50, 1, 1);

  noFill();
  strokeWeight(4);
  arc(centerX, centerY, 100, 100, 0, PI);

  if(mouseX < width/2) {
    console.log("left side of screen");
    stroke ("purple");
  }
  if(mouseX > width/2) {
    console.log("right side of screen");
    stroke ("blue");
  }


  strokeWeight(30);
  arc(centerX, centerY, 100, 100, PI, TWO_PI);

}
