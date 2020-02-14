$(window).scroll(function(e){
  parallax();
});

function parallax() {
  var scrolled = $(window).scrollTop();
  $('.background').css('top',-(scrolled*0.15)+'px');
}



var x = document.getElementById("CV");
var y = document.getElementById("cvButton");
var z = document.getElementById("exitCV");
var xx = document.getElementById("wrapper");
var xxx = document.getElementById("portfolio");

function openCV() {
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "block";
    xx.style.display = "none";
    xxx.style.display = "none";

    $(document).ready(function(){
    $(this).scrollTop(0);
});
  } else {
    x.style.display = "none";
    y.style.display = "block";
    xx.style.display = "block";
    xxx.style.display = "block";
  }
}

function closeCV() {
  if (x.style.display === "block" && z.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";
    xx.style.display = "block";
    xxx.style.display = "block";
} else {
  x.style.display = "block";
  z.style.display = "block";
  xx.style.display = "none";
  xxx.style.display = "none";
  }
}






var a = document.getElementById("contact");
var b = document.getElementById("contactButton");
var c = document.getElementById("exitContact");

function openContact() {
  if (a.style.display === "none") {
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "block";
} else {
    a.style.display = "none";
    b.style.display = "block";
  }
}

function closeContact() {
  if (a.style.display === "block" && c.style.display === "block") {
    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "none";
} else {
  a.style.display = "block";
  c.style.display = "block";
  }
}
