// ------------------------------------------------------------
// scene1.js
// Commit 2: minimal first story scene
// Purpose: verify routing from start -> scene1
// ------------------------------------------------------------

function drawScene1() {
  background(20, 20, 24);

  fill(230);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("Scene 1", width / 2, 200);

  textSize(16);
  fill(200);
  text(
    "You wake up in a dark room.\nThe light above you flickers.",
    width / 2,
    280,
  );

  const backBtn = {
    x: width / 2,
    y: 420,
    w: 260,
    h: 60,
  };

  // button
  rectMode(CENTER);
  noStroke();
  fill(isHover(backBtn) ? 200 : 160);
  rect(backBtn.x, backBtn.y, backBtn.w, backBtn.h, 10);

  fill(30);
  textSize(18);
  text("Return to Start", backBtn.x, backBtn.y);

  cursor(isHover(backBtn) ? HAND : ARROW);
}

function scene1MousePressed() {
  const backBtn = {
    x: width / 2,
    y: 420,
    w: 260,
    h: 60,
  };

  if (isHover(backBtn)) {
    currentScreen = "start";
  }
}
