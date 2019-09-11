function setup() {
    createCanvas(1920, 1080);
    m1 = new M1(0, 0, 200, 200);
    m4 = new M4(0, 0, 150, 150);
    m2 = new M2(m1, 150, 10); // numOfElements is number of elements in a row and in a column
    m3 = new M3(m4, 150, 250)
    mm1 = new MM1(m1)
//     mm1.firstDraw();
//     m2.drawOrnament();
    m3.drawMuar();
}

function draw() {

}

function M1(posX, posY, width, height) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.draw = function () {
        noFill();
        stroke(0, 0, 0);
        line(this.posX, this.posY, this.posX + this.height, this.posY);
        line(this.posX + this.width, this.posY, this.posX + this.width, this.posY + this.height);
        line(this.posX + this.width, this.posY + this.height, this.posX, this.posY + this.height);
        line(this.posX, this.posY, this.posX, this.posY + this.height);
        line(this.posX, this.posY, this.posX + this.width, this.posY + this.height);
        line(this.posX + this.width, this.posY, this.posX, this.posY + this.height);

    }
}

function M4(posX, posY, width, height) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.draw = function () {
        line(this.posX, this.posY, this.posX - this.width, this.posY + this.height);
        line(this.posX - this.width, this.posY + this.height, this.posX, this.posY + this.height * 2);
        line(this.posX, this.posY + this.height * 2, this.posX + this.width, this.posY + this.height);
        line(this.posX + this.width, this.posY + this.height, this.posX, this.posY);
        line(this.posX, this.posY, this.posX, this.posY + this.height * 2);
        line(this.posX - this.width, this.posY + this.height, this.posX + this.width, this.posY + this.height);

    }
}

function MM1(m1) {
    this.element = m1;
    this.firstDraw = function () {
        translate(width / 2 - (this.element.width * sqrt(2) / 2), height / 2 - (this.element.height * sqrt(2) / 2));
        this.element.draw();
    }
}


function M2(m1, radius, numOfElements) {
    this.element = m4;
    this.element.width = radius;
    this.element.height = radius;
    this.drawOrnament = function () {
        translate(width / 2, height / 2);
        for (var i = 0; i < numOfElements; i++) {
            push();
            rotate(TWO_PI * i / numOfElements);
            this.element.draw();
            pop();
        }
    }
}

function M3(m4, radius, numOfElements) {
    this.element = m4;
    this.element.width = radius;
    this.element.height = radius;
    this.drawMuar = function () {
        translate(width / 2, height / 2);
        for (var i = 0; i < numOfElements; i++) {
            push();
            rotate(TWO_PI * i / numOfElements);
            this.element.draw();
            pop();
        }

    }
}


