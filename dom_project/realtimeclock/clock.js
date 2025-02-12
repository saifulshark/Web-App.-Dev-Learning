const clock=document.getElementById('clock');
//const clock = document.querySelector('#clock');
setInterval(()=>{
    let now=new Date();
    clock.innerHTML = now.toLocaleTimeString();
},1000);