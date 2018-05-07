function alerte(){
for (var i = 1; i < 6; i++) {
  console.log(i);
}
}

function fun(){
  var element=document.getElementById('main');
  element.addEventListener('click',para);
  var element=document.getElementById('main-div-first');
  element.addEventListener('click',firstdiv);
  var element=document.getElementById('main-div-second');
  element.addEventListener('click',seconddiv);
}

function firstdiv(){
var element=document.getElementById('main-div-first');
var element1=document.getElementById('div-first-first');
element.setAttribute("style","flex:3;background-color:white");
element1.setAttribute("style","animation-name:wid;animation-duration:3s");
}
function seconddiv(){
  var element=document.getElementById('div-first-first');
  element.setAttribute("style","width:100%;animation-name:hig;animation-duration:3s");
}


function para(){
  var element=document.getElementById('paragraph');
  element.firstChild.nodeValue="lfsldkfjlsdjkfldjf";
}
function inpu(){
  var element=document.getElementById("name");
  alert(element.value)
}

document.addEventListener('DOMContentLoaded',fun);
