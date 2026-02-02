function drawScene3() {
  background(10, 10, 14);
  drawHUD();

  fill(230);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Scene 3 — Hallway", width / 2, 200);

  fill(200);
  textSize(16);
  text(
    "A long hallway.\nThe lights die one by one.\nA whisper calls your name from the dark.",
    width / 2,
    290,
  );

  const choiceA = { x: width / 2, y: 470, w: 520, h: 64 };
  const choiceB = { x: width / 2, y: 560, w: 520, h: 64 };

  rectMode(CENTER);
  noStroke();

  fill(isHover(choiceA) ? 200 : 160);
  rect(choiceA.x, choiceA.y, choiceA.w, choiceA.h, 10);

  fill(isHover(choiceB) ? 200 : 160);
  rect(choiceB.x, choiceB.y, choiceB.w, choiceB.h, 10);

  fill(30);
  textSize(18);
  text("Follow the whisper", choiceA.x, choiceA.y);
  text("Lock a nearby door", choiceB.x, choiceB.y);

  cursor(isHover(choiceA) || isHover(choiceB) ? HAND : ARROW);
}

function scene3MousePressed() {
  const choiceA = { x: width / 2, y: 470, w: 520, h: 64 };
  const choiceB = { x: width / 2, y: 560, w: 520, h: 64 };

  if (isHover(choiceA)) {
    currentScreen = "scene4A";
  } else if (isHover(choiceB)) {
    currentScreen = "scene4B";
  }
  if (isHover(choiceA)) {
    player.sanity -= 10;
    currentScreen = "scene4A";
  } else if (isHover(choiceB)) {
    currentScreen = "scene4B";
  }
}
