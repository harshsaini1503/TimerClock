let countdown;
let totalTime = 0;
let paused = false;
let remainingTime = 0;

function startTimer() {
    const minutes = parseInt(document.getElementById("minutes").value) || 0;
    const seconds = parseInt(document.getElementById("seconds").value) || 0;

    // Calculate the total time in seconds
    totalTime = minutes * 60 + seconds;

    if (!paused) {
        remainingTime = totalTime;
    }

    if (remainingTime > 0) {
        countdown = setInterval(updateTimer, 1000);
    }
}

function updateTimer() {
    const display = document.getElementById("display");

    if (remainingTime <= 0) {
        clearInterval(countdown);
        display.textContent = "00:00";
        return;
    }

    remainingTime--;

    const mins = Math.floor(remainingTime / 60);
    const secs = remainingTime % 60;

    display.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function pauseTimer() {
    clearInterval(countdown);
    paused = true;
}

function resetTimer() {
    clearInterval(countdown);
    paused = false;
    remainingTime = 0;
    document.getElementById("display").textContent = "00:00";
    document.getElementById("minutes").value = '';
    document.getElementById("seconds").value = '';
}
