// ------------------------------------------------------------
// main.js = the “router” (traffic controller) for the whole game
// ------------------------------------------------------------
//
// Idea: this project has multiple screens (start, instructions, game, win, lose).
// Instead of putting everything in one giant file, each screen lives in its own
// file and defines two main things:
//   1) drawX()         → how that screen looks
//   2) XMousePressed() / XKeyPressed() → how that screen handles input
//
// This main.js file does 3 important jobs:
//   A) stores the current screen in a single shared variable
//   B) calls the correct draw function each frame
//   C) sends mouse/keyboard input to the correct screen handler

// ------------------------------
// Global game state
// ------------------------------
// This variable is shared across all files because all files run in the same
// global JavaScript scope when loaded in index.html.
//
// We store the “name” of the current screen as a string.
// Only one screen should be active at a time.
let currentScreen = "start"; // "start" | "instr" | "game" | "win" | "lose"
// ------------------------------
// setup() runs ONCE at the beginning
// ------------------------------
// This is where you usually set canvas size and initial settings.
// ------------------------------
// Player stat (bonus)
// ------------------------------
let player = { sanity: 50 };

function resetPlayer() {
  player.sanity = 50;
}

function clampSanity() {
  player.sanity = constrain(player.sanity, 0, 100);
}

function drawHUD() {
  clampSanity();

  rectMode(CORNER);
  noStroke();
  fill(0, 0, 0, 140);
  rect(18, 18, 170, 46, 10);

  fill(255);
  textAlign(LEFT, CENTER);
  textSize(16);
  text(`SANITY: ${player.sanity}`, 32, 41);
}

function goToEndingBySanity() {
  clampSanity();

  if (player.sanity >= 60) currentScreen = "ending_good";
  else if (player.sanity >= 30) currentScreen = "ending_neutral";
  else currentScreen = "ending_bad";
}

function setup() {
  createCanvas(800, 800);

  // Sets a default font for all text() calls
  // (This can be changed later per-screen if you want.)
  textFont("sans-serif");
}

// ------------------------------
// draw() runs every frame (many times per second)
// ------------------------------
// This is the core “router” for visuals.
// Depending on currentScreen, we call the correct draw function.
function draw() {
  // Each screen file defines its own draw function:
  //   start.js         → drawStart()
  //   instructions.js  → drawInstr()
  //   game.js          → drawGame()
  //   win.js           → drawWin()
  //   lose.js          → drawLose()
  if (frameCount % 30 === 0) console.log("screen:", currentScreen);
  if (currentScreen === "start") {
    drawStart();
  } else if (currentScreen === "instr") {
    drawInstr();
  } else if (currentScreen === "scene1") {
    drawScene1();
  } else if (currentScreen === "scene2A") {
    drawScene2A();
  } else if (currentScreen === "scene2B") {
    drawScene2B();
  } else if (currentScreen === "scene3") {
    drawScene3();
  } else if (currentScreen === "scene4A") {
    drawScene4A();
  } else if (currentScreen === "scene4B") {
    drawScene4B();
  } else if (currentScreen === "ending_good") {
    drawEndingGood();
  } else if (currentScreen === "ending_neutral") {
    drawEndingNeutral();
  } else if (currentScreen === "ending_bad") {
    drawEndingBad();
  }

  // (Optional teaching note)
  // This “if/else chain” is a very common early approach.
  // Later in the course you might replace it with:
  // - a switch statement, or
  // - an object/map of screens
}

// ------------------------------
// mousePressed() runs once each time the mouse is clicked
// ------------------------------
// This routes mouse input to the correct screen handler.
function mousePressed() {
  // Each screen *may* define a mouse handler:
  // start.js         → startMousePressed()
  // instructions.js  → instrMousePressed()
  // game.js          → gameMousePressed()
  // win.js           → winMousePressed()
  // lose.js          → loseMousePressed()

  if (currentScreen === "start") {
    startMousePressed();
  } else if (currentScreen === "instr") {
    instrMousePressed();
  } else if (currentScreen === "scene1") {
    scene1MousePressed();
  } else if (currentScreen === "scene2A") {
    scene2AMousePressed();
  } else if (currentScreen === "scene2B") {
    scene2BMousePressed();
  } else if (currentScreen === "scene3") {
    scene3MousePressed();
  } else if (currentScreen === "scene4A") {
    scene4AMousePressed();
  } else if (currentScreen === "scene4B") {
    scene4BMousePressed();
  }
}

// ------------------------------
// keyPressed() runs once each time a key is pressed
// ------------------------------
// This routes keyboard input to the correct screen handler.
function keyPressed() {
  // Each screen *may* define a key handler:
  // start.js         → startKeyPressed()
  // instructions.js  → instrKeyPressed()
  // game.js          → gameKeyPressed()
  // win.js           → winKeyPressed()
  // lose.js          → loseKeyPressed()

  if (currentScreen === "start") {
    startKeyPressed();
  } else if (currentScreen === "instr") {
    instrKeyPressed();
  }
  if (key === "r" || key === "R") {
    if (
      currentScreen === "ending_good" ||
      currentScreen === "ending_neutral" ||
      currentScreen === "ending_bad"
    ) {
      resetPlayer();
      currentScreen = "start";
    }
  }
}

// ------------------------------------------------------------
// Shared helper function: isHover()
// ------------------------------------------------------------
//
// Many screens have buttons.
// This helper checks whether the mouse is inside a rectangle.
//
// Important: our buttons are drawn using rectMode(CENTER),
// meaning x,y is the CENTRE of the rectangle.
// So we check mouseX and mouseY against half-width/half-height bounds.
//
// Input:  an object with { x, y, w, h }
// Output: true if mouse is over the rectangle, otherwise false
function isHover({ x, y, w, h }) {
  return (
    mouseX > x - w / 2 && // mouse is right of left edge
    mouseX < x + w / 2 && // mouse is left of right edge
    mouseY > y - h / 2 && // mouse is below top edge
    mouseY < y + h / 2 // mouse is above bottom edge
  );
}
