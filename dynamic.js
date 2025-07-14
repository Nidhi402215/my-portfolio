// Typing Effect
const text = "Hi, I'm Nidhi — Web Developer and a Python Programmer 💻";
let index = 0;
function typeEffect() {
  if (index < text.length) {
    document.getElementById("type-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}
typeEffect();

// Alert on form submit
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! I'll get back to you soon.");
  this.reset();
});
