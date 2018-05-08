var bgImages = [];
var buttonItems = [];
var imageIndex = 0;
var brushSize = 10;
var sizeControl = [];

function setup() {

    createCanvas(1000, 600);

    bgImages[0] = loadImage("assets/food.png");
    bgImages[1] = loadImage("assets/rainbow.png");
    bgImages[2] = loadImage("assets/cheetah.png");

    sizeControl[0] = loadImage("assets/plus.png");
    sizeControl[1] = loadImage("assets/minus.png");

    buttonItems.push(new button(50, 50, 40, color(0, 0, 0)));

    var redText = createP("Red");
    redText.position(260, 5);
    buttonRedColor = createSlider(0, 255, 0);
    buttonRedColor.position(300, 20);

    var greenText = createP("Green");
    greenText.position(260, 35);
    buttonGreenColor = createSlider(0, 255, 0);
    buttonGreenColor.position(300, 50);

    var blueText = createP("Blue");
    blueText.position(260, 65);
    buttonBlueColor = createSlider(0, 255, 0);
    buttonBlueColor.position(300, 80);


}

function draw() {

    buttonItems[0].display();

    image(bgImages[imageIndex], 300, 150, 400, 400);

    image(sizeControl[0], 650, 50, 40, 40);
    image(sizeControl[1], 750, 50, 40, 40);


    if (mouseIsPressed && mouseY > 130) {
        fill(buttonRedColor.value(), buttonGreenColor.value(), buttonBlueColor.value());
        noStroke();
        ellipse(mouseX, mouseY, brushSize, brushSize);
    }

    var imageText = createP("Change Image");
    imageText.position(20, 15);

    fill(buttonRedColor.value(), buttonGreenColor.value(), buttonBlueColor.value());
    rect(475, 50, 40, 40);

    var colorText = createP("Color");
    colorText.position(475, 15);

    stroke(255, 255, 255);
    fill(buttonRedColor.value(), buttonGreenColor.value(), buttonBlueColor.value())
    ellipse(825, 70, brushSize);

    var sizeText = createP("Brush Size");
    sizeText.position(700, 15);


}

function mousePressed() {
    if (buttonItems[0].check() == true) {
        if (imageIndex < 2) {
            clear();
            imageIndex++;
        } else {
            clear();
            imageIndex = 0;
        }
    }

    if (mouseX > 650 && mouseX < 690 && mouseY > 50 && mouseY < 100) {
        brushSize++;
    }

    if (mouseX > 750 && mouseX < 790 && mouseY > 50 && mouseY < 100) {
        brushSize--;
    }
}

function button(tempX, tempY, tempSize, tempColor) {
    this.x = tempX;
    this.y = tempY;
    this.boxSize = tempSize;
    this.setFill = tempColor;

    this.display = function () {

        fill(this.setFill);
        stroke(0, 0, 0);
        strokeWeight(1);
        rect(this.x, this.y, this.boxSize, this.boxSize);

    }

    this.check = function () {
        if (mouseX > this.x && mouseX < this.x + this.boxSize && mouseY > this.y && mouseY < this.y + this.boxSize) {
            return true;
        } else {
            return false;
        }
    }

}
