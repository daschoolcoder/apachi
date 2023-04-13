javascript:req = new XMLHttpRequest(); 
req.open('GET', 'https://raw.githubusercontent.com/daschoolcoder/apachi/main/apachi.js'); 
req.onload = function() { eval(this.responseText ); }; req.send();
