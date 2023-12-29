var fantasy = 0;
var action = 0;
var science = 0;
var hist = 0;
var knowledge = 0;
var romance = 0;
var thriller = 0;

const sword = [3, 5, 1, 4, 0, 2, 1];
const shield = [2, 4, 0, 1, 3, 5, 3];
const staff = [5, 2, 4, 0, 3, 1, 2];
const bow = [4, 1, 3, 5, 2, 0, 0];

const game = [4, 2, 1, 3, 5, 0, 1];
const travel = [2, 0, 1, 5, 4, 3, 4];
const social = [0, 1, 2, 4, 3, 5, 4];
const growth = [0, 1, 3, 2, 4, 5, 5];

const competitive = [4, 5, 3, 2, 1, 0, 3];
const winner = [5, 4, 2, 0, 3, 1, 5, 4];
const nonchalant = [2, 0, 1, 5, 4, 3, 2];
const vibes = [5, 4, 2, 1, 3, 4, 0];

const isekai = [5, 4, 1, 0, 2, 3, 2];
const mecha = [1, 4, 5, 0, 2, 3, 3];
const slice = [1, 4, 5, 0, 2, 3, 3];
const horror = [1, 4, 5, 0, 2, 3, 3];

var section1 = false;
var section2 = false;
var section3 = false;
var section4 = false;
var section5 = false;

const swordBtn = document.getElementById("sword-btn");
const shieldBtn = document.getElementById("shield-btn");
const staffBtn = document.getElementById("staff-btn");
const bowBtn = document.getElementById("bow-btn");

const gameBtn = document.getElementById("game-btn");
const travelBtn = document.getElementById("travel-btn");
const socialBtn = document.getElementById("social-btn");
const growthBtn = document.getElementById("growth-btn");

const competitiveBtn = document.getElementById("competitive-btn");
const winnerBtn = document.getElementById("winner-btn");
const nonchalantBtn = document.getElementById("nonchalant-btn");
const vibesBtn = document.getElementById("vibes-btn");

const isekaiBtn = document.getElementById("isekai-btn");
const mechaBtn = document.getElementById("mecha-btn");
const sliceBtn = document.getElementById("slice-btn");
const horrorBtn = document.getElementById("horror-btn");

const hide1 = document.getElementById("con1");
const hide2 = document.getElementById("con2");

const hide3 = document.getElementById("con3");
const hide4 = document.getElementById("con4");

hide2.style.display = "none";
hide3.style.display = "none";
hide4.style.display = "none";

const recs = document.getElementById("rec_container");
recs.style.display = "none";

swordBtn.addEventListener("click", function () {
  fantasy += sword[0];
  action += sword[1];
  science += sword[2];
  hist += sword[3];
  knowledge += sword[4];
  romance += sword[5];
  thriller += sword[6];

  section1 = true;
  handleClick();
});

shieldBtn.addEventListener("click", function () {
  fantasy += shield[0];
  action += shield[1];
  science += shield[2];
  hist += shield[3];
  knowledge += shield[4];
  romance += shield[5];
  thriller += shield[6];

  section1 = true;

  handleClick();
});

staffBtn.addEventListener("click", function () {
  fantasy += staff[0];
  action += staff[1];
  science += staff[2];
  hist += staff[3];
  knowledge += staff[4];
  romance += staff[5];
  thriller += staff[6];

  section1 = true;

  handleClick();
});
bowBtn.addEventListener("click", function () {
  fantasy += bow[0];
  action += bow[1];
  science += bow[2];
  hist += bow[3];
  knowledge += bow[4];
  romance += bow[5];
  thriller += bow[6];

  section1 = true;

  handleClick();
});

gameBtn.addEventListener("click", function () {
  fantasy += game[0];
  action += game[1];
  science += game[2];
  hist += game[3];
  knowledge += game[4];
  romance += game[5];
  thriller += game[6];

  section2 = true;

  handleClick();
});

travelBtn.addEventListener("click", function () {
  fantasy += travel[0];
  action += travel[1];
  science += travel[2];
  hist += travel[3];
  knowledge += travel[4];
  romance += travel[5];
  thriller += travel[6];

  section2 = true;

  handleClick();
});

socialBtn.addEventListener("click", function () {
  fantasy += social[0];
  action += social[1];
  science += social[2];
  hist += social[3];
  knowledge += social[4];
  romance += social[5];
  thriller += social[6];

  section2 = true;

  handleClick();
});

growthBtn.addEventListener("click", function () {
  fantasy += growth[0];
  action += growth[1];
  science += growth[2];
  hist += growth[3];
  knowledge += growth[4];
  romance += growth[5];
  thriller += growth[6];

  section2 = true;

  handleClick();
});

competitiveBtn.addEventListener("click", function () {
  fantasy += competitive[0];
  action += competitive[1];
  science += competitive[2];
  hist += competitive[3];
  knowledge += competitive[4];
  romance += competitive[5];
  thriller += competitive[6];

  section3 = true;

  handleClick();
});

winnerBtn.addEventListener("click", function () {
  fantasy += winner[0];
  action += winner[1];
  science += winner[2];
  hist += winner[3];
  knowledge += winner[4];
  romance += winner[5];
  thriller += winner[6];

  section3 = true;

  handleClick();
});

nonchalantBtn.addEventListener("click", function () {
  fantasy += nonchalant[0];
  action += nonchalant[1];
  science += nonchalant[2];
  hist += nonchalant[3];
  knowledge += nonchalant[4];
  romance += nonchalant[5];
  thriller += nonchalant[6];

  section3 = true;

  handleClick();
});

vibesBtn.addEventListener("click", function () {
  fantasy += vibes[0];
  action += vibes[1];
  science += vibes[2];
  hist += vibes[3];
  knowledge += vibes[4];
  romance += vibes[5];
  thriller += vibes[6];

  section3 = true;

  handleClick();
});

isekaiBtn.addEventListener("click", function () {
  fantasy += isekai[0];
  action += isekai[1];
  science += isekai[2];
  hist += isekai[3];
  knowledge += isekai[4];
  romance += isekai[5];
  thriller += isekai[6];

  section4 = true;

  handleClick();
});

mechaBtn.addEventListener("click", function () {
  fantasy += mecha[0];
  action += mecha[1];
  science += mecha[2];
  hist += mecha[3];
  knowledge += mecha[4];
  romance += mecha[5];
  thriller += mecha[6];

  section4 = true;

  handleClick();
});

sliceBtn.addEventListener("click", function () {
  fantasy += slice[0];
  action += slice[1];
  science += slice[2];
  hist += slice[3];
  knowledge += slice[4];
  romance += slice[5];
  thriller += slice[6];

  section4 = true;

  handleClick();
});

horrorBtn.addEventListener("click", function () {
  fantasy += horror[0];
  action += horror[1];
  science += horror[2];
  hist += horror[3];
  knowledge += horror[4];
  romance += horror[5];
  thriller += horror[6];

  section4 = true;

  handleClick();
});

function handleClick() {
  //shows second set of questions
  if (
    section1 === true &&
    section2 === false &&
    section3 === false &&
    section4 === false
  ) {
    hide1.style.display = "none";
    hide2.style.display = "flex";
    hide3.style.display = "none";
    hide4.style.display = "none";

    recs.style.display = "none";

    //shows third set of questions
  } else if (
    section1 === true &&
    section2 === true &&
    section3 === false &&
    section4 === false
  ) {
    hide1.style.display = "none";
    hide2.style.display = "none";
    hide3.style.display = "flex";
    hide4.style.display = "none";

    recs.style.display = "none";

    //shows fourth set of questions
  } else if (
    section1 === true &&
    section2 === true &&
    section3 === true &&
    section4 === false
  ) {
    hide1.style.display = "none";
    hide2.style.display = "none";
    hide3.style.display = "none";
    hide4.style.display = "flex";

    recs.style.display = "none";
  }
  //shows recommendations
  else if (
    section1 === true &&
    section2 === true &&
    section3 === true &&
    section4 === true
  ) {
    hide1.style.display = "none";
    hide2.style.display = "none";
    hide3.style.display = "none";

    hide4.style.display = "none";

    recs.style.display = "flex";
    recommendation();
  }

 /*
  // test for values
 alert(
    "fantasy is: " +
      fantasy +
      "\n " +
      "action is: " +
      action +
      "\n " +
      "science is: " +
      science +
      "\n " +
      "history is: " +
      hist +
      "\n " +
      "knowledge is: " +
      knowledge +
      "\n " +
      "romance is: " +
      romance +
      "\n " +
      "horror is: " +
      thriller
  );*/
}

var topChoice = 0;
var section = "";
var secondChoice = 0;
var sec_section = "";
var maxIndex = -1;

function recommendation() {
  var userCounts = [
    ["fantasy", fantasy],
    ["action", action],
    ["science", science],
    ["history", hist],
    ["knowledge", knowledge],
    ["romance", romance],
    ["thriller", thriller],
  ];

  for (var i = 0; i <= userCounts.length - 1; i++) {
    if (userCounts[i][1] > topChoice) {
      topChoice = userCounts[i][1];
      section = userCounts[i][0];
      maxIndex = i;
    }
  }

  if (maxIndex !== -1) {
    // Remove the element with the maximum value
    userCounts.splice(maxIndex, 1);
  }

  for (var i = 0; i <= userCounts.length - 1; i++) {
    if (userCounts[i][1] > secondChoice) {
      secondChoice = userCounts[i][1];
      sec_section = userCounts[i][0];
    }
  }

  console.log(
    "Your top selection is " + section + " with a score of: " + topChoice
  );
  console.log(
    "Your top selection is " + sec_section + " with a score of: " + secondChoice
  );


}

/*
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

*/
document
  .getElementById("csvInput")
  .addEventListener("change", handleFileSelect);

function handleFileSelect(event) {
  const file = event.target.files[0];

  if (file) {
    // Use PapaParse to parse the CSV content
    Papa.parse(file, {
      complete: function (results) {
        // 'results.data' contains an array of arrays representing the CSV data
        const animeList = results.data;
        const genre = animeList[0];
        var topIndex = genre.indexOf(section);
        var botIndex = genre.indexOf(sec_section);

        console.log(genre);
        console.log("top index is: " + topIndex);
        console.log("bot index is: " + botIndex);

        // Iterate through the data array and access values under the specified header
        animeList.sort((a, b) => b[topIndex] - a[topIndex]);
        var firstPass = [];
        var secondPass = [];

        for (var i = 0; i < 6; i++) {
          firstPass.push(animeList[i]);
        }

        animeList.sort((a, b) => b[botIndex] - a[botIndex]);

        for (var i = 0; i < 3; i++) {
          secondPass.push(animeList[i]);
        }

        var topImage = "'" + secondPass[1][15] + "'";
        var botImage = "'" + secondPass[2][15] + "'";

        console.log(topImage);

        console.log("Final List");
        console.log(secondPass[1][0] + " and " + secondPass[2][0]);

        var top_rec = document.getElementById("top-rec");
        top_rec.style.backgroundImage = "url(" + topImage + ")";

        var bot_rec = document.getElementById("bot-rec");
        bot_rec.style.backgroundImage = "url(" + botImage + ")";
      },
    });
  }
}
