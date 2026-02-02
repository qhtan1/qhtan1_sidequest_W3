function drawEndingGood() {
  background(16, 22, 18);
  drawHUD();

  fill(235);
  textAlign(CENTER, CENTER);
  textSize(34);
  text("GOOD ENDING", width / 2, 180);

  fill(210);
  textSize(16);
  text(
    "The building opens a door.\nCold air. Street noise.\nYou remember everything.\n\nPress R to restart.",
    width / 2,
    320,
  );
}
