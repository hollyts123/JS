let intervalId;

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);

function startTimer() {
    intervalId = setInterval(updateClock, 1000);
    updateClock();
}
function stopTimer() {
    clearInterval(intervalId);
}

function updateClock() {
    const d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
}
