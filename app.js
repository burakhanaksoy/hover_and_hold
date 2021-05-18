const circle = document.querySelector("#circle");

// Add Event listener
circle.addEventListener("mouseenter", () => {
  circle.classList.remove("click");
  circle.classList.add("hover");
});
circle.addEventListener("mouseleave", () => {
  circle.classList.remove("hover");
  circle.classList.add("click");
});
