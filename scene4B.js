function drawScene4B() {
  background(8, 8, 10);

  fill(230);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Scene 4B — Behind the Door", width / 2, 200);

  fill(200);
  textSize(16);
  text(
    "You lock the door.\nSomething hits it once… twice… then stops.",
    width / 2,
    290,
  );

  const backBtn = { x: width / 2, y: 520, w: 320, h: 60 };

  rectMode(CENTER);
  noStroke();
  fill(isHover(backBtn) ? 200 : 160);
  rect(backBtn.x, backBtn.y, backBtn.w, backBtn.h, 10);

  fill(30);
  textSize(18);
  text("Back to Start (temp)", backBtn.x, backBtn.y);

  cursor(isHover(backBtn) ? HAND : ARROW);
}

function scene4BMousePressed() {
  const backBtn = { x: width / 2, y: 520, w: 320, h: 60 };
  if (isHover(backBtn)) {
    currentScreen = "start";
  }
}
