function changeColor() {
  const colors = ["#ff6b6b", "#6bffb3", "#6bc9ff", "#ffe66b", "#b26bff"];
  document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
}

function resetColor() {
  document.body.style.background = "linear-gradient(135deg, #74ABE2, #5563DE)";
}

function showAlert() {
  alert("🎉 Thanks for visiting my website!");
}
