var ground = document.querySelector("body");
var imagess = ["url('./images/wolfsburg.jpg')","url('./images/chmp.jpg')","url('./images/borussi.jpg')"];


function show() {
   for(i=0; i < imagess.length ; i++ ) { 
ground.style.backgroundImage = imagess[i]
}
 }
 


function mudar()  { 
show();

}


setInterval(mudar,1000); 

