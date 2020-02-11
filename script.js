var x = document.getElementById("CV");
var y = document.getElementById("cvButton");
var z = document.getElementById("exitButton");
var xx = document.getElementById("wrapper");

function openCV() {
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "block";
    xx.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
    xx.style.display = "block";
  }
}

function closeCV() {
  if (x.style.display === "block" && z.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";
    xx.style.display = "block";
} else {
  x.style.display = "block";
  z.style.display = "block";
  xx.style.display = "none";
  }
}

/*

$(document).ready(slideToggle(){
  $("cvButton").click(slideToggle(){
  
}
}

*/
