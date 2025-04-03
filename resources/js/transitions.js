document.addEventListener("DOMContentLoaded", function () {
  const bg1 = document.getElementById("bg1");
  const bg2 = document.getElementById("bg2");
  const bg3 = document.getElementById("bg3");

  const credit1 = document.getElementById("credit1");
  const credit2 = document.getElementById("credit2");
  const credit3 = document.getElementById("credit3");

  let showing = "bg1";
  const FADE_DURATION = 2000; // Tailwind duration in ms

  function showCredit(active, hidden1, hidden2) {
    // Fade in
    active.classList.remove("opacity-0");
    active.classList.remove("pointer-events-none");
    active.classList.add("z-20");

    // Fade out
    hidden1.classList.add("opacity-0");
    hidden1.classList.add("pointer-events-none");
    hidden1.classList.remove("z-20");

    hidden2.classList.add("opacity-0");
    hidden2.classList.add("pointer-events-none");
    hidden2.classList.remove("z-20");
  }

  setInterval(() => {
    if (showing === "bg1") {
      bg1.classList.add("opacity-0");
      bg2.classList.remove("opacity-0");
      showCredit(credit2, credit1, credit3);
      showing = "bg2";
    } else if (showing === "bg2") {
      bg2.classList.add("opacity-0");
      bg3.classList.remove("opacity-0");
      showCredit(credit3, credit1, credit2);
      showing = "bg3";
    } else {
      bg3.classList.add("opacity-0");
      bg1.classList.remove("opacity-0");
      showCredit(credit1, credit2, credit3);
      showing = "bg1";
    }
  }, 6000);
});

