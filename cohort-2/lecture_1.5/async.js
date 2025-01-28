function findSum(n) {
    let ans = 0;
    for (let i = 0; i<n; i++) {
      ans += i;
    }
    return ans;
  }
  
  function findSumTill100() {
    let x=findSum(100);
    console.log(x);
    return x;
  }
  //async global fnc or api, setTimeout;
  setTimeout(findSumTill100, 5000)
  console.log("hello world");
  let y=findSum(9);
  console.log(y);