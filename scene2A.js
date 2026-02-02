function drawScene2A() {
  drawHUD();
  background(14, 14, 18);

  fill(230);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Scene 2A — Reflection", width / 2, 200);

  fill(200);
  textSize(16);
  text(
    "Your reflection smiles before you do.\nIt moves slightly out of sync.",
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

function scene2AMousePressed() {
  const nextBtn = { x: width / 2, y: 520, w: 300, h: 60 };
  if (isHover(nextBtn)) {
    currentScreen = "scene3";
  }
  if (isHover(nextBtn)) {
    player.sanity -= 10;
    currentScreen = "scene3";
  }
}
