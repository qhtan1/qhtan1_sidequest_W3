function drawEndingNeutral() {
  background(18, 18, 22);
  drawHUD();

  fill(235);
  textAlign(CENTER, CENTER);
  textSize(34);
  text("NEUTRAL ENDING", width / 2, 180);

  fill(210);
  textSize(16);
  text(
    "You leave.\nBut the hallway follows you in reflections.\nSome rooms stay with you.\n\nPress R to restart.",
    width / 2,
    320,
  );
}
