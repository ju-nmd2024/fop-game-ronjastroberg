function setup() {
  createCanvas(900, 900);
}

// function draw() {
//   background(255, 140, 0);
// }

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

let y = 100;
let speed = 5;
function draw() {
  background(0, 180, 255);
  //clouds
  fill(253, 253, 253);
  noStroke();
  ellipse(100, 150, 60);
  ellipse(80, 170, 60);
  ellipse(120, 170, 60);
  ellipse(50, 180, 40);
  ellipse(150, 180, 40);

  //dessert
  fill(231, 215, 190);
  rect(0, 800, 900, 100);

  hotAirBalloon(400, y);
  if (keyIsDown(32)) {
    y = y - 40;
  } else if (y < 800) {
    y = y + speed;
  }
}
