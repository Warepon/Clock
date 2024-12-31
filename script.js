let currentSlide = 0;

function moveSlide(direction) {
  const slider = document.getElementById('slider');
  const slides = document.querySelectorAll('.slide');
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slider.style.transform = `translateX(${-currentSlide * 100}vw)`;
}

// 시계
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);

// 타이머
let timerInterval;
let timeRemaining;

function startTimer() {
  const minutes = parseInt(document.getElementById('timerMinutes').value);
  if (isNaN(minutes) || minutes <= 0) {
    alert('유효한 분 수를 입력하세요.');
    return;
  }
  timeRemaining = minutes * 60;
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (timeRemaining <= 0) {
    clearInterval(timerInterval);
    alert('타이머가 종료되었습니다!');
    return;
  }
  timeRemaining--;
  const minutes = String(Math.floor(timeRemaining / 60)).padStart(2, '0');
  const seconds = String(timeRemaining % 60).padStart(2, '0');
  document.getElementById('timer').textContent = `${minutes}:${seconds}`;
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  document.getElementById('timer').textContent = '00:00';
  document.getElementById('timerMinutes').value = '';
}

// 스톱워치
let stopwatchInterval;
let stopwatchTime = 0;

function startStopwatch() {
  if (stopwatchInterval) return;  // 이미 시작된 경우
  stopwatchInterval = setInterval(updateStopwatch, 1000);
}

function updateStopwatch() {
  stopwatchTime++;
  const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0');
  const seconds = String(stopwatchTime % 60).padStart(2, '0');
  document.getElementById('stopwatch').textContent = `${hours}:${minutes}:${seconds}`;
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  document.getElementById('stopwatch').textContent = '00:00:00';
  stopwatchInterval = null;
}
