// Digital Clock Update
function updateClock() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const date = now.toLocaleDateString();
    
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    dateElement.textContent = date;
}

// Alarm
let alarmTime = null;
let alarmActive = false;
const setAlarmBtn = document.getElementById('setAlarmBtn');
const alarmStatus = document.getElementById('alarmStatus');

setAlarmBtn.addEventListener('click', () => {
    const alarmInput = document.getElementById('alarmTime').value;
    alarmTime = alarmInput;
    alarmActive = true;
    alarmStatus.textContent = `Alarm set for: ${alarmTime}`;
});

// Stopwatch
let stopwatchInterval;
let stopwatchSeconds = 0;
let isStopwatchRunning = false;

const startStopwatchBtn = document.getElementById('startStopwatchBtn');
const resetStopwatchBtn = document.getElementById('resetStopwatchBtn');
const stopwatchTimeElement = document.getElementById('stopwatchTime');

startStopwatchBtn.addEventListener('click', () => {
    if (!isStopwatchRunning) {
        stopwatchInterval = setInterval(() => {
            stopwatchSeconds++;
            const hours = String(Math.floor(stopwatchSeconds / 3600)).padStart(2, '0');
            const minutes = String(Math.floor((stopwatchSeconds % 3600) / 60)).padStart(2, '0');
            const seconds = String(stopwatchSeconds % 60).padStart(2, '0');
            stopwatchTimeElement.textContent = `${hours}:${minutes}:${seconds}`;
        }, 1000);
        startStopwatchBtn.textContent = 'Stop';
        isStopwatchRunning = true;
    } else {
        clearInterval(stopwatchInterval);
        startStopwatchBtn.textContent = 'Start';
        isStopwatchRunning = false;
    }
});

resetStopwatchBtn.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchSeconds = 0;
    stopwatchTimeElement.textContent = '00:00:00';
    startStopwatchBtn.textContent = 'Start';
    isStopwatchRunning = false;
});

// Timer
let timerInterval;
let timerSeconds = 0;

const startTimerBtn = document.getElementById('startTimerBtn');
const timerMinutesInput = document.getElementById('timerMinutes');
const timerDisplay = document.getElementById('timerDisplay');

startTimerBtn.addEventListener('click', () => {
    const minutes = parseInt(timerMinutesInput.value);
    if (minutes && minutes > 0) {
        timerSeconds = minutes * 60;
        timerInterval = setInterval(() => {
            if (timerSeconds > 0) {
                timerSeconds--;
                const mins = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
                const secs = String(timerSeconds % 60).padStart(2, '0');
                timerDisplay.textContent = `${mins}:${secs}`;
            } else {
                clearInterval(timerInterval);
                alert('Timer Finished!');
            }
        }, 1000);
    } else {
        alert('Please enter a valid time.');
    }
});

// Focus Timer
let focusInterval;
let focusSeconds = 0;

const startFocusBtn = document.getElementById('startFocusBtn');
const focusMinutesInput = document.getElementById('focusMinutes');
const focusDisplay = document.getElementById('focusDisplay');

startFocusBtn.addEventListener('click', () => {
    const minutes = parseInt(focusMinutesInput.value);
    if (minutes && minutes > 0) {
        focusSeconds = minutes * 60;
        focusInterval = setInterval(() => {
            if (focusSeconds > 0) {
                focusSeconds--;
                const mins = String(Math.floor(focusSeconds / 60)).padStart(2, '0');
                const secs = String(focusSeconds % 60).padStart(2, '0');
                focusDisplay.textContent = `${mins}:${secs}`;
            } else {
                clearInterval(focusInterval);
                alert('Focus Time Finished!');
            }
        }, 1000);
    } else {
        alert('Please enter a valid focus time.');
    }
});

// Update clock every second
setInterval(updateClock, 1000);
