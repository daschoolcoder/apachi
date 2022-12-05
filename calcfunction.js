
function calc() {
  const e = document.createElement("div");
  
  e.innerHTML = `<div id="body">  </body>
  <p id="log"> </p> <div id="btns">
 <button id="1"> 1  </button> <button id="2"> 2 </button> <button id="3"> 3 </button>  <button id="pi"> π </button> <button id="."> . </button>
<br>
<button id="4"> 4 </button> <button id="5"> 5 </button> <button id="6"> 6 </button> <button id="+"> + </button> <button id="-"> - </button>
<br> 
<button id="7"> 7 </button> <button id="8"> 8 </button> <button id="9"> 9 </button> <button id="*"> * </button> <button id="/"> / </button>
<br>
<button id="0"> 0 </button>  <button id="("> ( </button> <button id=")"> ) </button> <button id="x"> x </button> <button id="y">y </button> <button id="sc"> ; </button>
<br>
<button id="enter"> Enter  </button> <button id="c"> Clear </button> </div>
<button id="r"> return </button>
`;
  document.body.appendChild(e);
  var Be = document.getElementById("enter"),
    B1 = document.getElementById("1"),
    B2 = document.getElementById("2"),
    B3 = document.getElementById("3"),
    B4 = document.getElementById("4"),
    B5 = document.getElementById("5"),
    B6 = document.getElementById("6"),
    B7 = document.getElementById("7"),
    B8 = document.getElementById("8"),
    B9 = document.getElementById("9"),
    B0 = document.getElementById("0"),
    oP = document.getElementById("log"),
    aB = document.getElementById("+"),
    sB = document.getElementById("-"),
    bD = document.getElementById("body"),
    mB = document.getElementById("*"),
    dB = document.getElementById("/"),
    cB = document.getElementById("c"),
    pB = document.getElementById("pi"),
    deB = document.getElementById("."),
    pr1 = document.getElementById("("),
    pr2 = document.getElementById(")"),
    bX = document.getElementById("x"),
    bY = document.getElementById("y"),
    sc = document.getElementById("sc"),
    r = document.getElementById("r");
  r.onclick=function () {document.body.removeChild(e);
         req = new XMLHttpRequest()
                        req.open('GET','https://raw.githubusercontent.com/daschoolcoder/apachi/main/apachi.js')
                        req.onload = function() {eval(this.responceText);} }


  var xc = false,
    yc = false;
  bD.style = 'background-color:rgb(25,140,255);width:150px;height:170px;border-width:3px;';
  var n1 = "";

  aB.style = 'width:25px;height:25px';
  sB.style = 'width:25px;height:25px';
  mB.style = 'width:25px;height:25px';
  dB.style = 'width:25px;height:25px';

  sc.onclick = function() {
    oP.innerHTML = oP.innerHTML + ';'
    n1 = n1 + ';';
  }

  bY.onclick = function() {
    if (yc == false) {
      oP.innerHTML = oP.innerHTML + 'y=';

      n1 = n1 + ';var y=';
      yc = true;
    } else if (yc == true) {
      oP.innerHTML = oP.innerHTML + 'y';
      n1 = n1 + 'y';
      yc = false;
    } else {
      oP.innerHTML = "var could not load";
    };
  }

  bX.onclick = function() {
    if (xc == false) {
      oP.innerHTML = oP.innerHTML + 'x=';

      n1 = n1 + ';var x=';
      xc = true;
    } else if (xc == true) {
      oP.innerHTML = oP.innerHTML + 'x';
      n1 = n1 + 'x';
      xc = false
    } else {
      oP.innerHTML = "var could not load";
    }
;}

  pr1.onclick = function() {
    oP.innerHTML = oP.innerHTML + '(';
    n1 = n1 + '(';

  }

  pr2.onclick = function() {
    oP.innerHTML = oP.innerHTML + ')';
    n1 = n1 + ')';

  }

  aB.onclick = function() {
    oP.innerHTML = oP.innerHTML + '+';
    n1 = n1 + '+';

  }
  sB.onclick = function() {
    oP.innerHTML = oP.innerHTML + '-';
    n1 = n1 + '-';

  }
  mB.onclick = function() {
    oP.innerHTML = oP.innerHTML + '*';
    n1 = n1 + '*';

  }

  dB.onclick = function() {
    oP.innerHTML = oP.innerHTML + '/';
    n1 = n1 + '/';

  }

  B1.onclick = function() {
    oP.innerHTML = oP.innerHTML + 1;
    n1 = n1 + 1;

  }
  B2.onclick = function() {
    oP.innerHTML = oP.innerHTML + 2;
    n1 = n1 + 2;

  }
  B3.onclick = function() {
    oP.innerHTML = oP.innerHTML + 3;
    n1 = n1 + 3;

  }
  B4.onclick = function() {
    oP.innerHTML = oP.innerHTML + 4;
    n1 = n1 + 4;

  }
  B5.onclick = function() {
    oP.innerHTML = oP.innerHTML + 5;
    n1 = n1 + 5;

  }
  B6.onclick = function() {
    oP.innerHTML = oP.innerHTML + 6;
    n1 = n1 + 6;

  }
  B7.onclick = function() {
    oP.innerHTML = oP.innerHTML + 7;
    n1 = n1 + 7;

  }
  B8.onclick = function() {
    oP.innerHTML = oP.innerHTML + 8;
    n1 = n1 + 8;

  }
  B9.onclick = function() {
    oP.innerHTML = oP.innerHTML + 9;
    n1 = n1 + 9;

  }
  B0.onclick = function() {
    oP.innerHTML = oP.innerHTML + 0;
    n1 = n1 + 0;

  }

  deB.onclick = function() {
    oP.innerHTML = oP.innerHTML + '.';
    n1 = n1 + '.';
  }

  pB.onclick = function() {
    oP.innerHTML = oP.innerHTML + "π";

    n1 = n1 + 3.1415;
  }

  cB.onclick = function() {
    document.body.removeChild(e);
    calc();
  }

  Be.onclick = function() {

    oP.innerHTML = eval(n1);
    console.log(n1)
    if (oP.innerHTML == 'NaN') {
      oP.innerHTML = 'Error num does not exist';
    };
  };
}
calc();
