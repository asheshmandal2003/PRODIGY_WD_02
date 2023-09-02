const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const milisec = document.querySelector(".milisec");
const reset = document.querySelector(".reset-btn");
const toggle = document.getElementById("toggle-btn");

let milisecond = 0;
let second = 0;
let minute = 0;
let interval;
let flag = true;

toggle.addEventListener("click", () => {
  flag ? startCount() : pauseCount();
});

reset.addEventListener("click", () => {
  clearInterval(interval);
  flag = true;
  toggle.classList.remove("pause-btn");
  toggle.classList.add("start-btn");
  toggle.textContent = "Start";
  minute = 0;
  second = 0;
  milisecond = 0;
  min.textContent = "00";
  sec.textContent = "00";
  milisec.textContent = "00";
});

function startCount() {
  flag = false;
  toggle.classList.remove("start-btn");
  toggle.classList.add("pause-btn");
  toggle.textContent = "Pause";
  interval = setInterval(() => {
    milisecond++;
    if (milisecond < 10) {
      milisec.textContent = "0" + milisecond;
    } else {
      milisec.textContent = milisecond;
    }
    if (milisecond === 99) {
      second++;
      if (second < 10) {
        sec.textContent = "0" + second;
      } else {
        sec.textContent = second;
      }
      milisecond = 0;
    }
    if (second === 59) {
      minute++;
      if (minute < 10) {
        min.textContent = "0" + minute;
      } else {
        min.textContent = minute;
      }
      second = 0;
    }
  }, 10);
}
function pauseCount() {
  flag = true;
  clearInterval(interval);
  toggle.classList.remove("pause-btn");
  toggle.classList.add("start-btn");
  toggle.textContent = "Resume";
}
