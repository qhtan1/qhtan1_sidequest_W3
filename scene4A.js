function drawScene4A() {
  background(8, 8, 10);
  drawHUD();

  fill(230);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Scene 4A — Closer", width / 2, 200);

  fill(200);
  textSize(16);
  text(
    "The whisper becomes your own voice.\nYou feel the floor creak like it's breathing.",
    width / 2,
    290,
  );

  const endBtn = { x: width / 2, y: 520, w: 360, h: 60 };

  rectMode(CENTER);
  noStroke();
  fill(isHover(endBtn) ? 200 : 160);
  rect(endBtn.x, endBtn.y, endBtn.w, endBtn.h, 10);

  fill(30);
  textSize(18);
  text("Step into the dark", endBtn.x, endBtn.y);

  cursor(isHover(endBtn) ? HAND : ARROW);
}

function scene4AMousePressed() {
  const endBtn = { x: width / 2, y: 520, w: 360, h: 60 };

  if (isHover(endBtn)) {
    player.sanity -= 20;
    goToEndingBySanity();
  }
}
