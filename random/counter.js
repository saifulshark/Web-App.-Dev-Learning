let count = 0;
const timer = () => {
  count += 1;
    if (count < 10) {  
  console.log(`count: ${count}`);
  return 0;
    }
};

setInterval(timer, 1000);