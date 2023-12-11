// Your countdown timer logic goes here

// Set the initial time in seconds
let seconds = 300; // 5 minutes (adjust as needed)

// Function to update the countdown timer display
function updateTimer() {
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    // Format the time as HH:MM:SS
    const formattedTime = `${padZero(minutes)}:${padZero(remainingSeconds)}`;

    // Update the timer element on the page
    document.getElementById('timer').innerText = formattedTime;
}

// Function to add leading zero to single-digit numbers
function padZero(number) {
    return number < 10 ? '0' + number : number;
}

// Start the countdown timer (you can call this function when your game starts)
function startCountdownTimer() {
    timerInterval = setInterval(function() {
        if (seconds > 0) {
            seconds--;
            updateTimer();
        } else {
            // Countdown timer has reached zero, you can perform additional actions here
            stopCountdownTimer();
            console.log('Countdown timer reached zero!');
        }
    }, 1000);
}

// Stop the countdown timer (you can call this function when needed)
function stopCountdownTimer() {
    clearInterval(timerInterval);
}

// Example: Start the countdown timer when the page loads
startCountdownTimer();
