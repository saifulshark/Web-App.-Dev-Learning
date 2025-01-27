let counter = 3;
const interval = setInterval(() => {
  console.log(counter);
  counter--;
  if (counter < 0) {
    clearInterval(interval);
    console.log("Countdown finished!");
  }
}, 1000); // 1000ms = 1 second
