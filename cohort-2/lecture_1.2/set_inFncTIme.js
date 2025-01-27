const startTime = Date.now();

setTimeout(() => {
  const endTime = Date.now();
  const timeDifference = endTime - startTime;
  console.log(`Time delay: ${timeDifference}ms`);
}, 100); // Delay is 100ms
