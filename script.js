function hamburger() {
  let menu = document.getElementById("menu");
  let bars = document.getElementById("bars");

  menu.classList.toggle("-translate-x-full");
  menu.classList.toggle("translate-x-0");

  bars.classList.toggle("rotate-0");
  bars.classList.toggle("rotate-360");

  bars.classList.toggle("text-black");
  bars.classList.toggle("text-[#4f39f6]");
}