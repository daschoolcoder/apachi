const E = document.createElement("html");
E.innerHTML = ` <div id="bg"> <center><h1 id="header"> Apachi v1-beta</h1> </center> 
<center>
<div id="time"> 
</div></center>

<div id="l">

<button id="lb" class="app"><style> #l{padding:15px}</style> lisensing</button> <button id="jsc"> JS console </button> <button id="ghp"> github page </button> <button id="cov"> cover tracks </button></div>
 <div id="2" style="padding:15px"> <button id="cal">calculator</button> </div>
`;
E.style = "position: absolute; top: 20x; left: 20px;"
document.body.appendChild(E);
   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    E.onmousedown = ((e = window.event) => {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = (() => {
            document.onmouseup = null;
            document.onmousemove = null;
        });
        document.onmousemove = ((e) => {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            let top = (E.offsetTop - pos2) > 0 ? (E.offsetTop - pos2) : 0;
            let left = (E.offsetLeft - pos1) > 0 ? (E.offsetLeft - pos1) : 0;
            E.style.top = top + "px";
            E.style.left = left + "px";
        });
    });
 var
  bg = document.getElementById("bg"),
  h = document.getElementById("header"),
  l = document.getElementById("lb"),
  jsc = document.getElementById("jsc"),
  ghp = document.getElementById("ghp"),
  cov = document.getElementById("cov"),
  cal = document.getElementById("cal"),
  time = document.getElementById("time");

bg.style = 'background-color:rgb(244,4,4);height:350px; width:400px;';
l.style = 'background-color:rgb(102,120,113);width:75px;height:25px;border-width:2px;border-color:rgb(0,0,0)';
jsc.style = 'background-color:rgb(102,120,113);width:85px;height:25px;border-width:2px;border-color:rgb(0,0,0)';
ghp.style = 'background-color:rgb(102,120,113);width:90px;height:25px;border-width:2px;border-color:rgb(0,0,0)';
cov.style = 'background-color:rgb(102,120,113);width:90px;height:25px;border-width:2px;border-color:rgb(0,0,0)';
cal.style = 'background-color:rgb(102,120,113);width:75px;height:25px;border-width:2px;border-color:rgb(0,0,0)';

//onclicks
l.onclick = function() {
  alert("so basicly just dont steal the code and brodcast it as your own");
}
ghp.onclick = function() {
  open("https://github.com/daschoolcoder/apachi");
}
cov.onclick = function() {
  window.location.href = "https://classroom.google.com";
}
cal.onclick = function() {

  req = new XMLHttpRequest();
  req.open('GET', 'https://raw.githubusercontent.com/daschoolcoder/apachi/functions/calcfunction.js');
  req.onload = function() {
    eval(this.responseText);

  };
  req.send();
document.body.removeChild(e)
}

jsc.onclick = function() { 
 const d = document.createElement("div");
 d.innerHTML = ` <input id="i"> <button id="s">`;
 var i = document.getElementById("i");
 
  
document.body.appendChild(d)
}

//other things

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let a = "am";
  m = checkTime(m);
  s = checkTime(s);
  var e1 = document.getElementById('time');
  e1.innerHTML = h + ":" + m + ":" + s + " " + a;
  e1.style = 'background-color:rgb(112,122,122);width:130px;';
  setTimeout(startTime, 1000);


  function checkTime(i) {
    if (i < 10) {
      i = "0" + i
    };
    return i;
  }
;}
startTime();
