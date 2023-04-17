function Apachi_Open() {



  var e = document.createElement('div');

  e.innerHTML = `


 <div style='background-color:rgb(255,0,0); width:100%;height:100%; z-index:0 '>
  <div>
 <center>  <h1> Apachi V1.6.0 Alpha </h1> </center> 
         </div> 
   
   
   
   <br>
   <br>
   <br>
   <br>
         <center> <input style='width:50%; background-color:rgb(111,111,111);border-width:3px;color:white;border-color:rgb(0,0,0);' id="search" placeholder="Https://example.com"> 
         
         <button id="enter" style="border-width:2px;border-color:rgb(0,0,0);background-color:rgb(111,111,111)" onclick='var i = document.getElementById("search").value;var iframe = document.createElement("iframe");iframe.src=i;iframe.style="width:100%;height:100%;";document.body.appendChild(iframe); 
         
         var o = document.createElement("button");
o.onclick= function() {window.open(iframe.src);};
o.innerHTML = "open as a tab";
o.style= "background-color:rgb(0,255,0)";

         
         var d = document.createElement("button");
             d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d);document.body.removeChild(o);};
             d.innerHTML="X";
             d.style="background-color:red";
             document.body.appendChild(d);
             document.body.appendChild(o);
               '> enter </button>  </center> 
        
        <center>
        <div style='padding:150px;'> <button style='background-color:rgb(111,111,111)' onclick='var iframe = document.createElement("iframe"); iframe.src="https://3ghost-deploy-seven.vercel.app/projects/retro-bowl/index.html"; iframe.style=" width:100%; height:100%";document.body.appendChild(iframe); var d = document.createElement("button");
             d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
             d.innerHTML="X";
             d.style="background-color:red";
             document.body.appendChild(d);
                '>Retro bowl</button>
        
        
        <button style='background-color:rgb(111,111,111);' onclick='var iframe = document.createElement("iframe"); iframe.src="https://grandcanyonshuttles.com/uploads/5/5/6/7/5567194/custom_themes/666344820848380631/baldi.html"; iframe.style=" width:102%; height:100%";document.body.appendChild(iframe); var d = document.createElement("button");
             d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
             d.innerHTML="X";
             d.style="background-color:red";
             document.body.appendChild(d);
                '> Baldis basics </button>    
     
     
      <button style='background-color:rgb(111,111,111);' onclick='var iframe = document.createElement("iframe"); iframe.src="https://grandcanyonshuttles.com/uploads/5/5/6/7/5567194/custom_themes/315300867982782623/1v1_lol.html"; iframe.style=" width:100%; height:100%";document.body.appendChild(iframe); var d = document.createElement("button");
             d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
             d.innerHTML="X";
             d.style="background-color:red";
             document.body.appendChild(d);
                '> 1v1 lol </button>    
        
        
             <button style='background-color:rgb(111,111,111);' onclick='var iframe = document.createElement("iframe"); iframe.src="https://3ghost-deploy-seven.vercel.app/projects/slope/index.html"; iframe.style=" width:100%; height:100%";document.body.appendChild(iframe); var d = document.createElement("button");
             d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
             d.innerHTML="X";
             d.style="background-color:red";
             document.body.appendChild(d);
                '> Slope </button>    
      
      
 
      
            <button style='background-color:rgb(111,111,111);' onclick='var iframe = document.createElement("iframe"); iframe.src="https://3ghost-deploy-seven.vercel.app/projects/2048/index.html"; iframe.style=" width:65%; height:100%";document.body.appendChild(iframe); var d = document.createElement("button");
             d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
             d.innerHTML="X";
             d.style="background-color:red";
             document.body.appendChild(d);
                '> 2048</button>
                
                
                <button style='background-color:rgb(111,111,111);' onclick='var iframe = document.createElement("iframe"); iframe.src="https://landgreen.github.io/sidescroller/"; iframe.style=" width:100%; height:100%";document.body.appendChild(iframe); var d = document.createElement("button");
             d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
             d.innerHTML="X";
             d.style="background-color:red";
             document.body.appendChild(d);
                '> N gon </button>  
             
             
           <button style='background-color:rgb(111,111,111);' onclick='var iframe = document.createElement("iframe"); iframe.src="https://www.mathplayground.com/pg_lows_adventures2.html"; iframe.style=" width:100%; height:100%";document.body.appendChild(iframe);var d = document.createElement("button");
             d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
             d.innerHTML="X";
             d.style="background-color:red";
             document.body.appendChild(d);
                '> Low's adventure </button>  
                
                
                <button style='background-color:rgb(111,111,111);' onclick='var iframe = document.createElement("iframe"); iframe.src="https://3ghost-deploy-seven.vercel.app/projects/among-us/"; iframe.style=" width:100%; height:100%";document.body.appendChild(iframe);var d = document.createElement("button");
             d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
             d.innerHTML="X";
             d.style="background-color:red";
             document.body.appendChild(d);
                '> Amongus </button> 
                
                
                <button style='background-color:rgb(111,111,111);' onclick='var iframe = document.createElement("iframe"); iframe.src="https://3ghost-deploy-seven.vercel.app/projects/craftmine/index.html"; iframe.style=" width:100%; height:100%";document.body.appendChild(iframe);var d = document.createElement("button");
             d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
             d.innerHTML="X";
             d.style="background-color:red";
             document.body.appendChild(d);
                '> Craft mine </button> 
                
                
                <button style='background-color:rgb(111,111,111);' onclick='var iframe = document.createElement("iframe"); iframe.src="https://3ghost-deploy-seven.vercel.app/projects/tunnel-rush/index.html"; iframe.style=" width:100%; height:100%";document.body.appendChild(iframe);var d = document.createElement("button");
             d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
             d.innerHTML="X";
             d.style="background-color:red";
             document.body.appendChild(d);
                '> Tunnle rush </button> 
                
                <button style='background-color:rgb(111,111,111);' onclick='var iframe = document.createElement("iframe"); iframe.src="https://3ghost-deploy-seven.vercel.app/projects/flappy-bird/index.html"; iframe.style=" width:100%; height:100%";document.body.appendChild(iframe);var d = document.createElement("button");
             d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
             d.innerHTML="X";
             d.style="background-color:red";
             document.body.appendChild(d);
                '> Flappy bird </button> 
                
                
                <button style='background-color:rgb(111,111,111);' onclick='var iframe = document.createElement("iframe"); iframe.src="https://3ghost-deploy-seven.vercel.app/projects/basketball-stars/index.html"; iframe.style=" width:100%; height:100%";document.body.appendChild(iframe);var d = document.createElement("button");
             d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
             d.innerHTML="X";
             d.style="background-color:red";
             document.body.appendChild(d);
                '> Basketball stars </button>
                
                
                <button style='background-color:rgb(111,111,111);' onclick='var iframe = document.createElement("iframe"); iframe.src="https://reinsmidt.com/"; iframe.style=" width:100%; height:100%";document.body.appendChild(iframe);var d = document.createElement("button");
             d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
             d.innerHTML="X";
             d.style="background-color:red";
             document.body.appendChild(d);
                '> Fullscreen mario </button>
                
                
                <button style='background-color:rgb(111,111,111);' onclick='var iframe = document.createElement("iframe"); iframe.src="https://3ghost-deploy-seven.vercel.app/projects/factoryballs/index.html"; iframe.style=" width:100%; height:100%";document.body.appendChild(iframe);var d = document.createElement("button");
             d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
             d.innerHTML="X";
             d.style="background-color:red";
             document.body.appendChild(d);
                '> Factory balls </button>
                <br>
                <br>
                
                
                <button style='background-color:rgb(111,111,111);' onclick='var iframe = document.createElement("iframe"); iframe.src="https://ihsprogrammingclub.herokuapp.com/application/v2/hvtrs8%2F-2rlcygr%2Ccm%2Foolkgy%2Fmcrv"; iframe.style=" width:100%; height:100%";document.body.appendChild(iframe);var d = document.createElement("button");
             d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
             d.innerHTML="X";
             d.style="background-color:red";
             document.body.appendChild(d);
                '> Monkey mart </button>
                
                
                
               <br>
               <br>
               <br>
               <br>
               <br>
               <br>
               
            <button style='background-color:rgb(111,111,111);' onclick='var iframe = document.createElement("iframe"); iframe.src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"; iframe.style=" width:65%; height:100%";document.body.appendChild(iframe); var d = document.createElement("button");
             d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
             d.innerHTML="X";
             d.style="background-color:red";
             document.body.appendChild(d);
                '> Maps </button>  
                
                <button style='background-color:rgb(111,111,111);' onclick='var iframe = document.createElement("iframe"); iframe.src="https://en.wikipedia.org"; iframe.style=" width:100%; height:100%;";document.body.appendChild(iframe); var d = document.createElement("button");
             d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
             d.innerHTML="X";
             d.style="background-color:red";
             document.body.appendChild(d);
                '> Wikipedia </button> 
                
                
                <button style='background-color:rgb(111,111,111);' onclick='var iframe = document.createElement("iframe"); iframe.src="https://ihsprogrammingclub.herokuapp.com/application/v2/hvtrs8%2F-cjavgrtrrmx%7B.oe-%23-"; iframe.style=" width:100%; height:100%;";document.body.appendChild(iframe); var d = document.createElement("button");
             d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
             d.innerHTML="X";
             d.style="background-color:red";
             document.body.appendChild(d);
                '> Chat GPT </button> 
                
                
                <button style='background-color:rgb(111,111,111);' onclick='var iframe = document.createElement("iframe"); iframe.src="https://ihsprogrammingclub.herokuapp.com"; iframe.style=" width:100%; height:100%;";document.body.appendChild(iframe); var d = document.createElement("button");
             d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
             d.innerHTML="X";
             d.style="background-color:red";
             document.body.appendChild(d);
                '> Web proxy </button>
                
                
                
                
        <button style='background-color:rgb(111,111,111);' onclick='var cal = prompt("Enter equation");alert(eval(cal));'> Calculator </button>
        
        
           <button style='background-color:rgb(111,111,111);' onclick='while(2!==1) {window.open();};'> Crash computer </button>
           
              <button style='background-color:rgb(111,111,111);' onclick='window.open("https://jsfiddle.net");'> Js fiddle </button>
              
              
              <button style='background-color:rgb(111,111,111);' onclick='var iframe = document.createElement("iframe"); iframe.src="https://kahoot.it"; iframe.style=" width:100%; height:100%";document.body.appendChild(iframe);var d = document.createElement("button");
             d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
             d.innerHTML="X";
             d.style="background-color:red";
             document.body.appendChild(d);
                '> Kahoot </button>
                
                
                
                
                
                <button style='background-color:rgb(111,111,111);' onclick='var iframe = document.createElement("iframe"); iframe.src="https://ihsprogrammingclub.herokuapp.com/application/v2/hvtrs8%2F-gktju%60.aoo%2F"; iframe.style=" width:100%; height:100%";document.body.appendChild(iframe);var d = document.createElement("button");
             d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
             d.innerHTML="X";
             d.style="background-color:red";
             document.body.appendChild(d);
                '> Github </button>
                
                
                
                
        
            
</center>
         </div>
         
         <title> Google Classroom</title>
         
         </div>
       
    

 `;



  var tab = window.open();
  tab.document.body.appendChild(e);
}


var window = window.location.href;

if (window !== "https://kellerisd.aeries.net/student/LoginParent.aspx") {
  window.open("https://kellerisd.aeries.net/student/LoginParent.aspx");
  Apachi_Open();;
} else {
  Apachi_Open();
}
