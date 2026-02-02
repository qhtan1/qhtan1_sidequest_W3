function drawInstr() {
  background(245);

  fill(20);
  textAlign(CENTER, CENTER);
  textSize(54);
  text("HELP", width / 2, 160);

  fill(40);
  textSize(18);
  text(
    "How to play:\n\n" +
      "• Click buttons to make choices.\n" +
      "• Your SANITY changes based on what you do.\n" +
      "• Different SANITY ranges unlock different endings.\n\n" +
      "Controls:\n" +
      "• Enter = Start (on title screen)\n" +
      "• R = Restart (on ending screens)\n\n" +
      "Press Esc or click Back to return.",
    width / 2,
    330,
  );

  const backBtn = { x: width / 2, y: 680, w: 320, h: 80 };

  rectMode(CENTER);
  noStroke();
  fill(isHover(backBtn) ? 205 : 190);
  rect(backBtn.x, backBtn.y, backBtn.w, backBtn.h, 16);

  fill(20);
  textSize(28);
  text("BACK", backBtn.x, backBtn.y);

  cursor(isHover(backBtn) ? HAND : ARROW);
}

function instrMousePressed() {
  const backBtn = { x: width / 2, y: 680, w: 320, h: 80 };
  if (isHover(backBtn)) currentScreen = "start";
}

function instrKeyPressed() {
  if (keyCode === ESCAPE) currentScreen = "start";
}
