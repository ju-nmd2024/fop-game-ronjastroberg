function setup() {
  createCanvas(900, 900);
}
let cloudX = 100;
let cloudsSpeed = 5;
let y = 0;
let gravity = 0.15;
let velocity = 0.6;
let gameState = true;
let state = "Start";
let shadowWidth = 0;
let shadowHeight = 0;

function hotAirBalloon(x, y) {
  let lightBrown = color(176, 164, 132);
  let darkBrown = color(76, 52, 32);
  let offWhite = color(237, 219, 180);
  let white = color(255, 255, 255);
  let peach = color(240, 127, 79);

  //lines holding the balloon
  stroke(darkBrown);
  strokeWeight(4);
  line(x, y - 55, x + 20, y - 5);
  line(x + 50, y - 59, x + 50, y - 5);
  line(x + 100, y - 55, x + 80, y - 5);

  //the balloon
  beginShape();
  fill(peach);
  vertex(x, y - 50);
  bezierVertex(x - 200, y - 200, x - 88, y - 353, x + 50, y - 350);
  bezierVertex(x + 130, y - 360, x + 300, y - 230, x + 100, y - 50);
  strokeWeight(10);
  stroke(240, 127, 79);
  line(x, y - 50, x + 100, y - 50);
  endShape();

  //pattern of balloon left
  push();
  translate(x - 40, y - 196);
  rotate(-0.1);
  noStroke();
  fill(offWhite);
  ellipse(0, 0, 45, 259);
  fill(white);
  scale(0.3);
  ellipse(-30, -90, 45, 259);
  pop();

  //pattern of ballon right
  push();
  translate(x + 132, y - 193);
  rotate(0.1);
  noStroke();
  fill(offWhite);
  ellipse(0, 0, 45, 257);
  fill(white);
  scale(0.3);
  ellipse(30, 70, 45, 257);
  pop();

  //pattern in the middle of balloon
  fill(offWhite);
  noStroke();
  ellipse(x + 45, y - 210, 50, 290);

  //line in the bottom of balloon
  stroke(offWhite);
  line(x - 25, y - 70, x + 121, y - 70);

  //basket
  fill(darkBrown);
  noStroke();
  rect(x, y, 100, 100, 20);
  stroke(lightBrown);
  strokeWeight(3);

  //basket pattern
  line(x + 2, y + 18, x + 98, y + 18);
  line(x + 2, y + 35, x + 98, y + 35);
  line(x + 2, y + 53, x + 98, y + 53);
  line(x + 2, y + 70, x + 98, y + 70);
  line(x + 2, y + 87, x + 98, y + 87);
  line(x + 18, y + 2, x + 18, y + 98);
  line(x + 35, y + 2, x + 35, y + 98);
  line(x + 53, y + 2, x + 53, y + 98);
  line(x + 70, y + 2, x + 70, y + 98);
  line(x + 87, y + 3, x + 87, y + 98);
  fill(lightBrown);
  rect(x - 2, y - 5, 105, 15, 20);
}

function clouds(x, y) {
  fill(253, 253, 253);
  noStroke();
  ellipse(x + 10, y + 50, 80);
  ellipse(x - 40, y + 90, 100);
  ellipse(x + 60, y + 90, 100);
  ellipse(x + 10, y + 100, 80);

  push();
  translate(x + 650, y + 150);
  ellipse(x - 100, y - 100, 80);
  ellipse(x - 150, y - 60, 100);
  ellipse(x - 50, y - 60, 100);
  ellipse(x - 100, y - 50, 80);
  pop();

  push();
  translate(x + 130, y + 300);
  ellipse(x - 100, y - 100, 80);
  ellipse(x - 150, y - 60, 100);
  ellipse(x - 60, y - 60, 100);
  ellipse(x - 100, y - 50, 80);
  pop();

  push();
  translate(x + 550, y + 360);
  ellipse(x - 100, y - 100, 80);
  ellipse(x - 150, y - 60, 100);
  ellipse(x - 60, y - 60, 100);
  ellipse(x - 100, y - 50, 80);
  pop();

  push();
  translate(x + 350, y - 10);
  ellipse(x - 100, y - 100, 80);
  ellipse(x - 150, y - 60, 100);
  ellipse(x - 60, y - 60, 100);
  ellipse(x - 100, y - 50, 80);
  pop();
}

function startScreen() {
  background(0, 180, 255);
  noStroke();

  //moving cloouds
  clouds(cloudX, 100);
  cloudX = cloudX + cloudsSpeed;
  if (cloudX <= 0) {
    cloudsSpeed = 5;
  } else if (cloudX >= 300) {
    cloudsSpeed = -5;
  }

  //sand
  fill(191, 117, 75);
  rect(0, 800, 900, 100);

  //dark pyramids
  fill(115, 68, 52);
  triangle(0, 800, 150, 550, 300, 800);
  triangle(650, 800, 850, 500, 1000, 800);

  //light pyramids
  fill(191, 117, 75);
  triangle(150, 800, 250, 650, 350, 800);
  triangle(550, 800, 670, 600, 800, 800);

  //balloon
  stroke(76, 52, 32);
  strokeWeight(5);
  line(390, 370, 410, 440);
  line(530, 280, 470, 500);
  noStroke();
  fill(237, 219, 180);
  ellipse(450, 240, 260, 320);
  fill(240, 127, 79);
  textSize(48);
  text("BALLOON", 370, 240);
  text("LANDER", 380, 280);

  //startbutton
  fill(240, 127, 79);
  rect(300, 420, 300, 100, 20);

  //text on button
  fill(237, 219, 180);
  textSize(50);
  textFont("Impact");
  text("START GAME", 330, 490);
}

function gameScreen() {
  background(0, 180, 255);

  //clouds
  clouds(100, 100);

  //sand
  fill(191, 117, 75);
  rect(0, 800, 900, 100);

  //dark pyramids
  fill(115, 68, 52);
  triangle(0, 800, 150, 550, 300, 800);
  triangle(650, 800, 850, 500, 1000, 800);

  //light pyramids
  fill(191, 117, 75);
  triangle(150, 800, 250, 650, 350, 800);
  triangle(550, 800, 670, 600, 800, 800);

  //landing place
  fill(0, 0, 0, 100);
  ellipse(450, 850, shadowWidth, shadowHeight);

  hotAirBalloon(400, y);
  if (gameState === true) {
    if (keyIsDown(32)) {
      gravity = -0.8;
    } else {
      gravity = 0.15;
    }
    velocity = velocity + gravity;
    y = y + velocity;
    shadowWidth = (y / 750) * 200;
    shadowHeight = (y / 750) * 80;
  }

  if (y > 750 && velocity > 4) {
    state = "ResultYouLose";
  }
  if (y > 750 && velocity < 4) {
    state = "ResultYouWin";
  }
}

function resultScreenYouWin() {
  background(0, 180, 255);
  noStroke();

  //moving clouds
  clouds(cloudX, 100);
  cloudX = cloudX + cloudsSpeed;
  if (cloudX <= 0) {
    cloudsSpeed = 5;
  } else if (cloudX >= 300) {
    cloudsSpeed = -5;
  }

  //sand
  fill(191, 117, 75);
  rect(0, 800, 900, 100);

  //dark pyramids
  fill(115, 68, 52);
  triangle(0, 800, 150, 550, 300, 800);
  triangle(650, 800, 850, 500, 1000, 800);

  //light pyramids
  fill(191, 117, 75);
  triangle(150, 800, 250, 650, 350, 800);
  triangle(550, 800, 670, 600, 800, 800);

  //landing place
  fill(0, 0, 0, 100);
  ellipse(450, 850, shadowWidth, shadowHeight);

  //hot air balloon
  hotAirBalloon(400, 750);

  noStroke();

  //play again button
  fill(115, 68, 52);
  rect(300, 300, 300, 100, 20);

  //play again text
  fill(237, 219, 180);
  textSize(50);
  textFont("Impact");
  text("PLAY AGAIN", 340, 370);

  //home button
  fill(115, 68, 52);
  rect(300, 450, 300, 100, 20);

  //home text
  fill(237, 219, 180);
  textSize(50);
  textFont("Impact");
  text("HOME", 390, 520);

  //you win text
  fill(83, 161, 40);
  textSize(150);
  text("YOU WIN!", 180, 200);
}

function resultScreenYouLose() {
  background(0, 180, 255);
  noStroke();

  //moving clouds
  clouds(cloudX, 100);
  cloudX = cloudX + cloudsSpeed;
  if (cloudX <= 0) {
    cloudsSpeed = 5;
  } else if (cloudX >= 300) {
    cloudsSpeed = -5;
  }

  //sand
  fill(191, 117, 75);
  rect(0, 800, 900, 100);

  //dark pyramids
  fill(115, 68, 52);
  triangle(0, 800, 150, 550, 300, 800);
  triangle(650, 800, 850, 500, 1000, 800);

  //light pyramids
  fill(191, 117, 75);
  triangle(150, 800, 250, 650, 350, 800);
  triangle(550, 800, 670, 600, 800, 800);

  //play again button
  fill(240, 127, 79);
  rect(300, 300, 300, 100, 20);

  //play again text
  fill(237, 219, 180);
  textSize(50);
  textFont("Impact");
  text("PLAY AGAIN", 340, 370);

  //home button
  fill(240, 127, 79);
  rect(300, 450, 300, 100, 20);

  //home text
  fill(237, 219, 180);
  textSize(50);
  textFont("Impact");
  text("HOME", 390, 520);

  //you win text
  fill(145, 18, 24);
  textSize(150);
  text("YOU LOSE!", 160, 200);

  //hot air ballon rotation
  push();
  translate(450, 750);
  rotate(HALF_PI);
  hotAirBalloon(0, 0);
  pop();
}

function draw() {
  if (state === "Start") {
    startScreen();
  } else if (state === "Game") {
    gameScreen();
  } else if (state === "ResultYouLose") {
    resultScreenYouLose();
  } else if (state === "ResultYouWin") {
    resultScreenYouWin();
  }
}

function mouseClicked() {
  if (
    state === "Start" &&
    mouseX >= 300 &&
    mouseX <= 600 &&
    mouseY >= 420 &&
    mouseY <= 520
  ) {
    state = "Game";
    gameState = true;
    y = 0;
    gravity = 0.15;
    velocity = 0.6;
  }
  if (
    state === "ResultYouLose" &&
    mouseX >= 300 &&
    mouseX <= 600 &&
    mouseY >= 420 &&
    mouseY <= 520
  ) {
    state = "Start";
  } else if (
    state === "ResultYouLose" &&
    mouseX >= 300 &&
    mouseX <= 600 &&
    mouseY >= 300 &&
    mouseY <= 400
  ) {
    state = "Game";
    gameState = true;
    y = 0;
    gravity = 0.15;
    velocity = 0.6;
  }

  if (
    state === "ResultYouWin" &&
    mouseX >= 300 &&
    mouseX <= 600 &&
    mouseY >= 450 &&
    mouseY <= 550
  ) {
    state = "Start";
  } else if (
    state === "ResultYouWin" &&
    mouseX >= 300 &&
    mouseX <= 600 &&
    mouseY >= 300 &&
    mouseY <= 400
  ) {
    state = "Game";
    gameState = true;
    y = 0;
    gravity = 0.15;
    velocity = 0.6;
  }
}
