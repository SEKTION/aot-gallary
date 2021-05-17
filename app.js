var panels = document.querySelectorAll(".panel");

function expand() {
  this.setAttribute("style", "flex: 3; filter: grayscale(0)");
  this.querySelector("h1").style.transform = "translateY(0)";
}

function shrink() {
  this.setAttribute("style", "flex: 1; filter: grayscale(1)");
  this.querySelector("h1").style.transform = "translateY(10rem)";
}

panels.forEach((p) => p.addEventListener("mouseenter", expand));
panels.forEach((p) => p.addEventListener("mouseleave", shrink));
