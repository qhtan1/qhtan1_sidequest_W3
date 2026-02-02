// ------------------------------------------------------------
// start.js (updated theme + title)
// ------------------------------------------------------------

function drawStart() {
  background(20, 20, 24);

  // Title
  fill(235);
  textAlign(CENTER, CENTER);
  textSize(56);
  text("Out of Sync", width / 2, 220);

  // Subtitle
  fill(180);
  textSize(16);
  text("A short branching horror story", width / 2, 280);

  // Buttons
  const startBtn = { x: width / 2, y: 420, w: 360, h: 70 };
  const helpBtn = { x: width / 2, y: 520, w: 360, h: 70 };

  rectMode(CENTER);
  noStroke();

  // START button
  fill(isHover(startBtn) ? 200 : 160);
  rect(startBtn.x, startBtn.y, startBtn.w, startBtn.h, 12);

  // HELP button
  fill(isHover(helpBtn) ? 200 : 160);
  rect(helpBtn.x, helpBtn.y, helpBtn.w, helpBtn.h, 12);

  // Button labels
  fill(30);
  textSize(22);
  text("START", startBtn.x, startBtn.y);
  text("HELP", helpBtn.x, helpBtn.y);

  // Small hint (clarity)
  fill(140);
  textSize(12);
  text("Tip: Press Enter to start • Press H for help", width / 2, 640);

  cursor(isHover(startBtn) || isHover(helpBtn) ? HAND : ARROW);
}

function startMousePressed() {
  const startBtn = { x: width / 2, y: 420, w: 360, h: 70 };
  const helpBtn = { x: width / 2, y: 520, w: 360, h: 70 };

  if (isHover(startBtn)) {
    resetPlayer();
    currentScreen = "scene1";
  } else if (isHover(helpBtn)) {
    currentScreen = "instr";
  }
}

function startKeyPressed() {
  if (keyCode === ENTER) {
    resetPlayer();
    currentScreen = "scene1";
  }

  // Keep it simple & on-theme
  if (key === "h" || key === "H") {
    currentScreen = "instr";
  }
}
