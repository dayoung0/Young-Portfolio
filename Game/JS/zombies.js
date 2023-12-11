let suffix = 3;
 let lm = localStorage.getItem('levelCount');
 suffix *= lm;
function startup() {
  addZombie();
}


function addZombie(zom_Number) {
  let num_zombies = zom_Number * 3;

  while (num_zombies > 0) {

    const newZombie = document.createElement("img");

    newZombie.setAttribute("class", "zombie");
    newZombie.src = "../images/pixel_art_zombie_noBG.png";
    newZombie.setAttribute("id", "zombie" + suffix);
    newZombie.style.position = "static";
    newZombie.style.width = "150px";
    newZombie.style.height = "auto";

    document.getElementById("imageContainer").appendChild(newZombie);
    num_zombies--;
    suffix--;

  }
}
function removeZombie() {
  let temp = "zombie" + n.toString();
  if (n > 1) {
    document.getElementById(temp).style.display = "none";

  } else if (n === 0) {
    document.getElementById("zombie1").style.display = "none";
  }
}
