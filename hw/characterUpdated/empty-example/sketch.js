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


    //Top Button
    fill(198, 198, 198);
    rect(0, 0, 50, 50);
    textSize(10);
    fill(0, 0, 0);
    text('Dark', 1, 10);
    text('Blue', 1, 25);

    //Bottom Button
    fill(198, 198, 198);
    rect(650, 450, 50, 50);
    textSize(10);
    fill(0, 0, 0);
    text('Light', 651, 460);
    text('Blue', 651, 475);

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

function checkTopButton() {
    if (mouseX > 0 && mouseX < 50 && mouseY > 0 && mouseY < 50) {
        return true;
    } else {
        return false;
    }
}

function checkBottomButton() {
    if (mouseX > 650 && mouseX < 700 && mouseY > 450 && mouseY < 500) {
        return true;
    } else {
        return false;
    }
}


function mousePressed() {
    if (checkTopButton() == true) {
        bgColor = color(30, 200, 255);
    }
    if (checkBottomButton() == true) {
        bgColor = color(179, 253, 255);
    }
}