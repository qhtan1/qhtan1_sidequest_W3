// ------------------------------------------------------------
// scene1.js
// Commit 2: minimal first story scene
// Purpose: verify routing from start -> scene1
// ------------------------------------------------------------
function drawScene1() {
  background(20, 20, 24);
  drawHUD();

  const g = getGlitchOffset();

  fill(230);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("Scene 1", width / 2, 200);

  textSize(16);
  fill(200);
  text(
    "You wake up in a dark room.\nThe light above you flickers.\nA mirror faces your bed.",
    width / 2,
    290,
  );

  const choiceA = { x: width / 2, y: 460, w: 520, h: 64 };
  const choiceB = { x: width / 2, y: 550, w: 520, h: 64 };

  rectMode(CENTER);
  noStroke();

  fill(isHover(choiceA) ? 200 : 160);
  rect(choiceA.x, choiceA.y, choiceA.w, choiceA.h, 10);

  fill(isHover(choiceB) ? 200 : 160);
  rect(choiceB.x, choiceB.y, choiceB.w, choiceB.h, 10);

  fill(30, getGlitchAlpha());
  textSize(18);
  text("Look at the mirror", choiceA.x + g.x, choiceA.y + g.y);
  text("Ignore it and step back", choiceB.x + g.x, choiceB.y + g.y);

  cursor(isHover(choiceA) || isHover(choiceB) ? HAND : ARROW);
}

function scene1MousePressed() {
  const choiceA = { x: width / 2, y: 460, w: 520, h: 64 };
  const choiceB = { x: width / 2, y: 550, w: 520, h: 64 };

  if (isHover(choiceA)) {
    player.sanity -= 10;
    currentScreen = "scene2A";
  } else if (isHover(choiceB)) {
    player.sanity += 5;
    currentScreen = "scene2B";
  }
}
