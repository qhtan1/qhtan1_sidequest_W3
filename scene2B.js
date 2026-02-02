function drawScene2B() {
  background(14, 14, 18);

  fill(230);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Scene 2B — The Knock", width / 2, 200);

  fill(200);
  textSize(16);
  text(
    "You refuse the mirror.\nThree soft knocks come from inside the wall.",
    width / 2,
    290,
  );

  const nextBtn = { x: width / 2, y: 520, w: 300, h: 60 };

  rectMode(CENTER);
  noStroke();
  fill(isHover(nextBtn) ? 200 : 160);
  rect(nextBtn.x, nextBtn.y, nextBtn.w, nextBtn.h, 10);

  fill(30);
  textSize(18);
  text("Continue", nextBtn.x, nextBtn.y);

  cursor(isHover(nextBtn) ? HAND : ARROW);
}

function scene2BMousePressed() {
  const nextBtn = { x: width / 2, y: 520, w: 300, h: 60 };
  if (isHover(nextBtn)) {
    currentScreen = "scene3";
  }
}
