document.querySelector(".open-book").addEventListener("click", function () {
  this.classList.toggle("opened");

  const currentZIndex = parseInt(this.style.zIndex) || 1;

  // Set a new z-index value
  const newZIndex = this.classList.contains("opened") ? 0 : 4;

  // Update the z-index property
  this.style.zIndex = newZIndex;
});



document.querySelector(".open-book2").addEventListener("click", function () {
  this.classList.toggle("opened");
  const currentZIndex = parseInt(this.style.zIndex) || 1;

  // Set a new z-index value
  const newZIndex = this.classList.contains("opened") ? 1 : 3;

  // Update the z-index property
  this.style.zIndex = newZIndex;

});

document.querySelector(".open-book3").addEventListener("click", function () {
  this.classList.toggle("opened");
  const currentZIndex = parseInt(this.style.zIndex) || 1;

  // Set a new z-index value
  const newZIndex = this.classList.contains("opened") ? 3 : 1;

  // Update the z-index property
  this.style.zIndex = newZIndex;
});

document.querySelector(".open-book4").addEventListener("click", function () {
  this.classList.toggle("opened");
  const currentZIndex = parseInt(this.style.zIndex) || 1;

  // Set a new z-index value
  const newZIndex = this.classList.contains("opened") ? 4 : 0;

  // Update the z-index property
  this.style.zIndex = newZIndex;
});
