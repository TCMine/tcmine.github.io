// Get the canvas element
let canvas = document.getElementById("grid-background");
let ctx = canvas.getContext("2d");

// Set the size of the canvas
let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

// Initialize the grid
let gridSize = 50;
let squareWidth = Math.floor(canvasWidth / gridSize);
let squareHeight = Math.floor(canvasHeight / gridSize);

let gridX = 0;
let gridY = 0;
let speed = 1;

// Paint the canvas
function paintCanvas() {
  // Loop through each grid cell
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let x = i * squareWidth;
      let y = j * squareHeight;

      // Draw a colored rectangle
      ctx.fillStyle = "#FFF";
      ctx.fillRect(x, y, squareWidth, squareHeight);
    }
  }
}

// Prepare the background animation
function animateBackground() {
  // Move the grid
  gridX -= speed;
  if (gridX <= -(squareWidth)) {
    gridX = 0;
  }

  // Request another animation frame
  requestAnimationFrame(animateBackground);

  // Paint the canvas
  paintCanvas();
}

// Execute animation when page has loaded
window.addEventListener("load", animateBackground);
