// Get HTML elements by ID
const timerDisplay = document.getElementById('timer');
const focusDurationSelect = document.getElementById('focus-duration');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

// 변수 초기화
let workTime = parseInt(focusDurationSelect.value) * 60;
let breakDuration;
let timeLeft = workTime;
let interval;
let isRunning = false;
let isFocus = true;
let focusTime = 0;
let breakTime = 0;

// 화면에 타이머 업데이트
function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.innerText = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

// Switch between focus mode and break mode
function switchMode() {
  isFocus = !isFocus;
  workTime = parseInt(focusDurationSelect.value) * 60;
  breakDuration = getBreakDuration(workTime);
  timeLeft = isFocus ? workTime : breakDuration;
  updateTimerDisplay();
}

// Get the break duration based on the work time
function getBreakDuration(workTime) {
  if (workTime === 10 * 60) return 5 * 60;
  if (workTime === 25 * 60) return 10 * 60;
  if (workTime === 45 * 60) return 15 * 60;
}

// Start the timer
function startTimer() {
  if (isRunning) return;
  isRunning = true;

  interval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (isFocus) {
      focusTime += 1 / 60;
    } else {
      breakTime += 1 / 60;
    }
    updateFocusBreakTime();

    if (timeLeft === 0) {
      clearInterval(interval);
      isRunning = false;

      if (isFocus) {
        alert('Focus time is up! Time for a break.');
      } else {
        alert('Break time is up! Time to focus again.');
      }
      switchMode();
    }
  }, 1000);
}

// Pause the timer
function pauseTimer() {
  if (isRunning) {
    clearInterval(interval);
    isRunning = false;
  }
}

//타이머 초기화
function resetTimer() {
  clearInterval(interval);
  isRunning = false;
  isFocus = true;
  workTime = parseInt(focusDurationSelect.value) * 60;
  timeLeft = workTime;
  updateTimerDisplay();
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);