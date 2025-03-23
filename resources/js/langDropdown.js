/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

let dropdownOpen = false;

function myFunction() {
  const dropdown = document.getElementById("myDropdown");

  if (!dropdownOpen) {
    dropdown.classList.remove("hidden");
    dropdown.style.display = "block";
    dropdownOpen = true;
  } else {
    dropdown.classList.add("hidden");
    dropdown.style.display = "";
    dropdownOpen = false;
  }
}

// ✅ Close dropdown if clicking outside of it
window.onclick = function(event) {
  const dropdown = document.getElementById("myDropdown");
  const button = document.getElementById("dropbtn");

  if (dropdownOpen && !dropdown.contains(event.target) && event.target !== button) {
    setTimeout(() => {
      dropdown.classList.add("hidden");
      dropdown.style.display = "";
      dropdownOpen = false;
    }, 150); // give time for click to process
  }
};
