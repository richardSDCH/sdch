document.addEventListener("DOMContentLoaded", function () {
    const bg1 = document.getElementById("bg1");
    const bg2 = document.getElementById("bg2");
    const credit1 = document.getElementById("credit1");
    const credit2 = document.getElementById("credit2");
    let showingBg1 = true;

    setInterval(() => {
      if (showingBg1) {
        bg1.classList.add("opacity-0");
        bg2.classList.remove("opacity-0");
        credit1.classList.add("opacity-0");
        credit2.classList.remove("opacity-0");
      } else {
        bg1.classList.remove("opacity-0");
        bg2.classList.add("opacity-0");
        credit1.classList.remove("opacity-0");
        credit2.classList.add("opacity-0");
      }
      showingBg1 = !showingBg1;
    }, 6000); // switch every 6 seconds
  });