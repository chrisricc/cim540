var posX = 0;
var posY = 0;
var eyeColor = "white";
var pupilColor = "black";
var mouthColor = "red";
var buttonColor = "blue";
var noseColor = "orange";
var bgColor = 0;

var buttonRedColor, buttonGreenColor, buttonBlueColor;


function setup() {

    createCanvas(700, 500);
    bgColor = color(179, 253, 255);


    posX = width / 2;
    posY = height / 2;

}

function draw() {

    background(bgColor);

    posX = mouseX;
    posY = mouseY;

    strokeWeight(0);
    //Head
    fill(253, 249, 0);
    ellipse(posX, posY, 120, 120);

    //Eyes
    var eyeMoveX = map(mouseX, 0, width, -15, 15);
    var eyeMoveY = map(mouseY, 0, height, -15, 15);
    fill(eyeColor);
    ellipse(posX - 25 + eyeMoveX, posY - 20 + eyeMoveY, 25, 25);
    fill(pupilColor);
    ellipse(posX - 25 + eyeMoveX, posY - 20 + eyeMoveY, 12, 12);

    fill(eyeColor);
    ellipse(posX + 25 + eyeMoveX, posY - 20 + eyeMoveY, 25, 25);
    fill(pupilColor);
    ellipse(posX + 25 + eyeMoveX, posY - 20 + eyeMoveY, 12, 12);

    //Nose
    fill(noseColor);
    triangle(posX - 20, posY + 10, posX, posY, posX, posY + 10);


    //Mouth
    fill(mouthColor);
    arc(posX, posY + 20, 50, 60, 0, PI);
}
