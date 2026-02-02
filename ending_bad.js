function drawEndingBad() {
  background(6, 6, 8);
  drawHUD();

  fill(235);
  textAlign(CENTER, CENTER);
  textSize(34);
  text("BAD ENDING", width / 2, 180);

  fill(210);
  textSize(16);
  text(
    "You never left.\nThe building learned how to think like you.\n\nPress R to restart.",
    width / 2,
    320,
  );
}
