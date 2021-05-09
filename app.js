var panels = document.querySelectorAll(".panel");

function expand() {
  this.style.setProperty("flex", 3);
  this.querySelector("h1").style.transform = "translateY(0)";
}

function shrink() {
  this.style.setProperty("flex", 1);
  this.querySelector("h1").style.transform = "translateY(10rem)";
}

panels.forEach((p) => p.addEventListener("mouseenter", expand));
panels.forEach((p) => p.addEventListener("mouseleave", shrink));