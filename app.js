"use strict";

/*
Drawing a Rectangle
ctx.fillStyle = "blue"; // Set fill color
ctx.fillRect(50, 50, 200, 100); // (x, y, width, height)

Drawing a Line
ctx.beginPath();
ctx.moveTo(300, 200); // Starting point
ctx.lineTo(500, 300); // Ending point
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.stroke(); // Draw the line

Drawing a Circle
ctx.beginPath();
ctx.arc(400, 200, 50, 0, Math.PI * 2); // (x, y, radius, startAngle, endAngle)
ctx.fillStyle = "green";
ctx.fill();

Drawing Text
ctx.font = "30px Arial";
ctx.fillStyle = "black";
ctx.fillText("Hello Canvas!", 100, 100); //text - horizontal - vertical
*/

const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

const label = document.querySelector("#label");

// Reset the width/height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isDrawing = false;
let lastX;
let lastY;
let hue = 0;
let direction = true;

ctx.strokeStyle = "BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;
// ctx.globalCompositeOperation = "overlay";

// let randomWidth = Math.trunc(Math.random() * 100);

canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
canvas.addEventListener("mousedown", (e) => {
  label.style.display = "none";
  isDrawing = true;
  // while clicking it will update the last X,Y
  lastX = e.offsetX;
  lastY = e.offsetY;
});

canvas.addEventListener("mousemove", function (e) {
  if (!isDrawing) return;
  // console.log(e, "event");
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  ctx.beginPath();

  // start from points
  ctx.moveTo(lastX, lastY);

  // Goto points
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  lastX = e.offsetX;
  lastY = e.offsetY;
  hue++;

  if (hue > 360) hue = 0;

  if (ctx.lineWidth >= 80 || ctx.lineWidth <= 8) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
    console.log("direction", direction);
  } else {
    ctx.lineWidth--;
  }
});

setTimeout(() => {
  ctx.clearRect(lastX - 10, lastY - 10, 20, 20); // Adjust size to remove the stroke
}, 2000);

//  Erasing

// let isErasing = false; // Toggle for eraser mode

// canvas.addEventListener("mousedown", () => (isErasing = true));
// canvas.addEventListener("mouseup", () => (isErasing = false));
// canvas.addEventListener("mousemove", eraseStroke);

// function eraseStroke(event) {
//   if (!isErasing) return;

//   const x = event.offsetX;
//   const y = event.offsetY;

//   ctx.strokeStyle = "white"; // Set stroke color to the background color
//   ctx.lineWidth = 20; // Make it bigger to act like an eraser
//   ctx.lineCap = "round";

//   ctx.beginPath();
//   ctx.moveTo(x, y);
//   ctx.lineTo(x, y);
//   ctx.stroke();
// }
