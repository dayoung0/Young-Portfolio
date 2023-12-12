let dmgProgressBar = document.getElementById("dmgBuff-bar");
let dmgCollectButton = document.getElementById("dmgBuff-button");

let timeProgressBar = document.getElementById("timeBuff-bar");
let timeCollectButton = document.getElementById("time-buff-button");

let button1 = document.getElementById("weapon");



let dmgProgress = 0;
let timeProgress = 0;



var level_beat = localStorage.getItem('level_beat');


if (level_beat === null) {
  var level_beat = 0;
}else{

  level_beat = parseInt(level_beat); 
}
level_beat++;

localStorage.setItem('level_beat', level_beat);
const relativePath = window.location.pathname;

// Extract the filename
const filename = relativePath.substring(relativePath.lastIndexOf('/') + 1);

addZombie(level_beat);


let startValue = 15 * level_beat;
let clickToWin = 15 * level_beat;


let n = 3 * level_beat;
startCountdownTimer();

function winCondition() {
  if (seconds > 0) {
    if (clickToWin > 0) {
      if (clickToWin % 5 === 0 && startValue !== clickToWin) {
        removeZombie();
        --clickToWin;
        n--;
      } else if (clickToWin === 1) {
        --clickToWin;
        n--;
        removeZombie();
        if(filename === "Level5.html"){
          window.location.href = "Winner.html";
          localStorage.clear();


        }
        else{
        roundWin();
        }
      } else {
        clickToWin--;
      }
    }
  } else if (seconds === 0) {
    timerFunction();
  }
}

function timerFunction() {
  level_beat = 0
  localStorage.clear();
  localStorage.setItem('level_beat', level_beat);

  window.location.href = "loser.html";


}


function roundWin(){
  stopCountdownTimer();
  const winButton = document.createElement("button");
  const buttonText = document.createTextNode("Next Level");

  winButton.appendChild(buttonText);
  winButton.setAttribute("id", "win_btn");
    document.getElementById("imageContainer").appendChild(winButton);
    winButton.addEventListener("click",  nextLevel );


}


// Add an event listener to the button
//dmgCollectButton.addEventListener("click", handleDmgBuffButton);
//timeCollectButton.addEventListener("click", handleTimeBuffButton);

button1.addEventListener("click", winCondition);

// Set the time 
let seconds = 10; 

// Updates the countdown timer display
function updateTimer() {
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  // Format the time as MM:SS
  const formattedTime = `${padZero(minutes)}:${padZero(remainingSeconds)}`;

  // Update the timer element on the page
  document.getElementById("timer").innerText = formattedTime;
}

// Function to add leading zero to single-digit numbers
function padZero(number) {
  return number < 10 ? "0" + number : number;
}

// Start the countdown timer
function startCountdownTimer() {
  timerInterval = setInterval(function () {
    if (seconds > 0) {
      seconds--;
      updateTimer();
    } else {
      // Countdown timer has reached zero
      stopCountdownTimer();
      timerFunction();
    }
  }, 1000);
}

// Stop the countdown timer
function stopCountdownTimer() {
  clearInterval(timerInterval);
}


/*

// Function to update the Damage progress bar
function updateDmgProgressBar() {
  dmgProgressBar.style.height = (dmgProgress / clicksRequired) * 100 + "%";
}

// Function to handle button click
function handleDmgBuffButton() {
  if (dmgProgress < clicksRequired) {
    dmgProgress++;
    updateDmgProgressBar();
    if (dmgProgress >= clicksRequired) {
      dmgCollectButton.disabled = true; // Disable the button when the goal is reached
    }
  }
}

// Function to update the progress bar
function updateTimeProgressBar() {
  timeProgressBar.style.height = (timeProgress / clicksRequired) * 100 + "%";
}

// Function to handle button click
function handleTimeBuffButton() {
  if (timeProgress < clicksRequired) {
    timeProgress++;
    updateTimeProgressBar();
    if (timeProgress >= clicksRequired) {
      timeCollectButton.disabled = true; // Disable the button when the goal is reached
    }
  }
}

*/
