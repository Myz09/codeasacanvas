var ScrollElem = document.querySelectorAll('.scroll'); 
 
document.onscroll = function() { 
  ScrollElem.forEach(ScrollElem => { 
  var posElem = ScrollElem.getBoundingClientRect(); 
  var dist = posElem.top; 
  
  if(dist < 500) { 
    ScrollElem.classList.add('scroll--show'); 
  }
 });
}
