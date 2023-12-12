// Check if count is already stored in localStorage
var count = localStorage.getItem("count");

// If count is not stored, initialize it to 2
if (count === null || count < 2) {
  count = 2;
} else if (count > 5) {
  localStorage.removeItem("count");
} else {
  count++;
}

function nextLevel() {
  var nextLvl = "Home" + count + ".html";

  // Store the updated count in localStorage
  localStorage.setItem("count", count);

  window.location.href = nextLvl;
}
