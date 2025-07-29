
let display = document.querySelector(".display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;


function start(){
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
    
  }
}
function stop() {
  clearInterval(timer);
  isRunning = false;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  elapsedTime = 0;
  display.textContent = "00:00:00";
}

function update() {
  let currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hrs = String(Math.floor(elapsedTime / 3600000)).padStart(2, '0');
  let mins = String(Math.floor((elapsedTime % 3600000) / 60000)).padStart(2, '0');
  let secs = String(Math.floor((elapsedTime % 60000) / 1000)).padStart(2, '0');

  display.textContent =`${hrs}:${mins}:${secs}`;

}


