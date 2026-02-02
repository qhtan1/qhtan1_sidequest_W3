function drawScene4B() {
  background(8, 8, 10);
  drawHUD();

  const g = getGlitchOffset();

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

  const endBtn = { x: width / 2, y: 520, w: 360, h: 60 };

  rectMode(CENTER);
  noStroke();
  fill(isHover(endBtn) ? 200 : 160);
  rect(endBtn.x, endBtn.y, endBtn.w, endBtn.h, 10);

  textSize(18);
  fill(30, getGlitchAlpha());
  text("Hold your breath", endBtn.x + g.x, endBtn.y + g.y);

  cursor(isHover(endBtn) ? HAND : ARROW);
}

function scene4BMousePressed() {
  const endBtn = { x: width / 2, y: 520, w: 360, h: 60 };

  if (isHover(endBtn)) {
    player.sanity += 10;
    goToEndingBySanity();
  }
}
