
'use strict';

document.onload = function(){
const navbarEl = document.getElementById('.navbar');

function myMove() {
    var elem = document.getElementById(".navbar");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  }


document.querySelector(navbarEl).onmouseenter = function() {
    mouseEnter()

};



document.querySelector('.navbar').onmouseleave = function(){
    mouseLeave()
};

function mouseEnter() {
    document.getElementById('.navbar').style.fillOpacity = 50;
  }













}



