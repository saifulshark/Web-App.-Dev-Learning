//IIFE= Immediately Invoked Function
//When f(x),a function runs and calls g(x),a global function or works based on global function's regulation. 
//Then, here f(x) makes a gas/pollution/traffic. If an urgent task need to get done immediately then here occurs an issue of latency.
//Here comes IIFE: It does not rely on Global function, and gets done immediately. i.e.:DB server connection and response specially need this function for immediate execution.
//Two types here: 1)Named 2)Normal(unnamed)

// //A normal function:
// var x="    Saiful Islam Sohan     ";//i.e. taken from an form/user signup etc.
// function clearName(){
// console.log(x.trim());
// }
// clearName(x);
// //normal to arrow:
// const trimAndLog = () => {
//   console.log(x.trim());
// };

// trimAndLog();
//IIFE
//Structure is ()(): (function expression)(function execution)
var x="    Saiful Islam Sohan     ";//i.e. taken from an form/user signup etc.
//IIFE in normal Function    
    (function clearName(){
    console.log(x.trim());
    })
    ()
//IIFE(named) in arrow Function
var x = "    Saiful Islam Sohan     ";
(() => {
  console.log(x.trim());
})();
//IIFE(unnamed) in arrow Function
((user)=>{console.log(`DataBase Connected ${user} server`);
})
('saifulire');
