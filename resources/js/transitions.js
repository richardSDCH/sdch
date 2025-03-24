document.addEventListener("DOMContentLoaded", function () {
    const bg1 = document.getElementById("bg1");
    const bg2 = document.getElementById("bg2");
    const bg3 = document.getElementById("bg3");
    const credit1 = document.getElementById("credit1");
    const credit2 = document.getElementById("credit2");
    const credit3 = document.getElementById("credit3");
    let showing = "bg1";

  setInterval(() => {
    if (showing === "bg1") {
      bg1.classList.add("opacity-0");
      bg2.classList.remove("opacity-0");
      credit1.classList.add("opacity-0");
      credit2.classList.remove("opacity-0");
      showing = "bg2"
    } else if (showing === "bg2") {
      bg2.classList.add("opacity-0");
      bg3.classList.remove("opacity-0");
      credit2.classList.add("opacity-0");
      credit3.classList.remove("opacity-0");
      showing = "bg3"
    } else {
      bg3.classList.add("opacity-0");
      bg1.classList.remove("opacity-0");
      credit3.classList.add("opacity-0");
      credit1.classList.remove("opacity-0");
      showing = "bg1";
    }
  }, 6000); // switch every 6 seconds
});