var fantasy = 0;
var horror = 0;
var action = 0;

var sword = [3, 5, 1];
var shield = [2, 4, 0];
var staff = [5, 2, 4];
var bow = [4, 1, 3];

var game = [4, 2, 1];
var travel = [2, 0, 1];
var social = [0, 1, 2];
var growth = [0, 1, 3];

var section1 = false;
var section2 = false;
var section3 = false;

const swordBtn = document.getElementById("sword-btn");
const sheildBtn = document.getElementById("sheild-btn");
const staffBtn = document.getElementById("staff-btn");
const bowBtn = document.getElementById("bow-btn");

const gameBtn = document.getElementById("game-btn");
const travelBtn = document.getElementById("travel-btn");
const socialBtn = document.getElementById("social-btn");
const growthBtn = document.getElementById("growth-btn");

const hide1 = document.getElementById("con1");
const hide2 = document.getElementById("con2");
hide2.style.display = "none";

const recs = document.getElementById("rec_container");
recs.style.display = "none";

swordBtn.addEventListener("click", function () {
  fantasy += sword[0];
  horror += sword[1];
  action += sword[2];

  section1 = true;
  handleClick();
});

sheildBtn.addEventListener("click", function () {
  fantasy += shield[0];
  horror += shield[1];
  action += shield[2];
  section1 = true;

  handleClick();
});

staffBtn.addEventListener("click", function () {
  fantasy += staff[0];
  horror += staff[1];
  action += staff[2];
  section1 = true;

  handleClick();
});
bowBtn.addEventListener("click", function () {
  fantasy += bow[0];
  horror += bow[1];
  action += bow[2];
  section1 = true;

  handleClick();
});

gameBtn.addEventListener("click", function () {
  fantasy += game[0];
  horror += game[1];
  action += game[2];
  section2 = true;

  handleClick();
});

travelBtn.addEventListener("click", function () {
  fantasy += travel[0];
  horror += travel[1];
  action += travel[2];
  section2 = true;

  handleClick();
});

socialBtn.addEventListener("click", function () {
  fantasy += social[0];
  horror += social[1];
  action += social[2];
  section2 = true;

  handleClick();
});

growthBtn.addEventListener("click", function () {
  fantasy += growth[0];
  horror += growth[1];
  action += growth[2];
  section2 = true;

  handleClick();
});

function handleClick() {
  if (section1 === true && section2 === false && section3 === false) {
    swordBtn.disabled = true;
    sheildBtn.disabled = true;
    staffBtn.disabled = true;
    bowBtn.disabled = true;

    hide1.style.display = "none";
    hide2.style.display = "flex";
    recs.style.display = "none";
  } else if (section1 === true && section2 === true && section3 === false) {
    swordBtn.disabled = true;
    sheildBtn.disabled = true;
    staffBtn.disabled = true;
    bowBtn.disabled = true;

    gameBtn.disabled = true;
    travelBtn.disabled = true;
    socialBtn.disabled = true;
    growthBtn.disabled = true;

    hide1.style.display = "none";
    hide2.style.display = "none";
    recs.style.display = "flex";
    recommendation();
  } else {
    hide1.style.display = "flex";
    hide2.style.display = "none";
    recs.style.display = "none";
  }

  alert(
    "fantasy is: " +
      fantasy +
      ", " +
      "horror is: " +
      horror +
      ", " +
      "action is: " +
      action
  );
}

function recommendation() {
  var array = [
    ["fantasy", fantasy],
    ["horror", horror],
    ["action", action],
  ];
  var max = 0;
  var section = "";
  var second = 0;
  var sec_section = "";

  for (var i = 0; i <= array.length - 1; i++) {
    if (array[i][1] > max) {
      max = array[i][1];
      section = array[i][0];
    }
  }

  for (var i = 0; i <= array.length - 1; i++) {
    if (array[i][1] > second && array[i][1] < max) {
      second = array[i][1];
      sec_section = array[i][0];
    }
  }

  console.log(max);
  console.log(section);

  console.log(second);
  console.log(sec_section);


}


document.addEventListener('DOMContentLoaded', function () {
  // File path relative to the HTML file
  const filePath = 'test-data-anime.csv';

  // Use fetch to load the CSV file
  fetch(filePath)
    .then(response => response.text())
    .then(csvData => {
      // Parse the CSV data using Papa Parse
      Papa.parse(csvData, {
        complete: function (results) {
          // 'results.data' contains an array of objects representing the CSV data
          console.log(results.data);
        }
      });
    })
    .catch(error => console.error('Error fetching CSV file:', error));
});