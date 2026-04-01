
export function startTimer(duration, display, onTimeUp){
  let time = duration;

  const timer = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    display.textContent =
      String(minutes).padStart(2, '0') + ":" +
      String(seconds).padStart(2, '0');

    time--;

    if (time < 0) {
      clearInterval(timer);
      onTimeUp();
    }
  }, 1000);

  return timer;
}