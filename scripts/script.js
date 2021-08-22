var babo = document.querySelector("header");
var nab = document.querySelector("nav");
var pindut = document.querySelector(".toggle");
var menu = document.querySelector(".menu");
const show1 = document.querySelector("#show1");
const show2 = document.querySelector("#show2");
const show3 = document.querySelector('#show3');
const show4 = document.querySelector('#show4');
var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');
var btn3 = document.querySelector('.btn3');
var btnPc1 = document.querySelector('#btnPc1');
var btnPc2 = document.querySelector('#btnPc2');
var btnPc3 = document.querySelector('#btnPc3');
var btnHome1 = document.querySelector('.home1');
var btnHome2 = document.querySelector('.home2');
var lista = document.querySelectorAll("nav ul li");
var quote = document.querySelector('.boxcont2');
var mouse = document.querySelector('.boxcont');

babo.style.animation = "headani 0.8s ease-in-out forwards";
nab.style.animation = "navani 1s 0.9s ease-in-out forwards";

function removeAni () {
  babo.style.animation = "";
  babo.style.transform = "translateY(0%)"
  nab.style.animation = "";
  nab.style.transform = "translateX(0%)"
}

quote.style.animation = "moveleft2 0.8s ease-out forwards";

pindut.addEventListener("click", () => {
  pindut.classList.toggle('active');
  menu.classList.toggle('active');
});

btnPc1.addEventListener("click", () => {
  show2.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});
btnPc2.addEventListener("click", () => {
  show3.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});
btnPc3.addEventListener("click", () => {
  show4.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

btn1.addEventListener("click", () => {
  show2.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  pindut.classList.toggle('active');
  menu.classList.toggle('active');
});
btn2.addEventListener("click", () => {
  show3.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  pindut.classList.toggle('active');
  menu.classList.toggle('active');
});
btn3.addEventListener("click", () => {
  show4.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  pindut.classList.toggle('active');
  menu.classList.toggle('active');
});
btnHome1.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: 'smooth',})
});
btnHome2.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: 'smooth',})
});

var x = window.matchMedia("(min-width: 2560px")
var x2 = window.matchMedia("(max-width: 3100px)")
var y = window.matchMedia("(min-width: 3840px)")
var z = window.matchMedia("(max-width: 2500px)")
var z2 = window.matchMedia("(min-width: 490px)")
var phoneSize = window.matchMedia("(max-width: 480px)")

if (x.matches&&x2.matches) {
  var scroll1 = 700;
  var scroll2 = 2000;

  var scroll3 = 2001;
  var scroll4 = 3400;

  var scroll5 = 3401;
}
else if (y.matches) {
  var scroll1 = 1000;
  var scroll2 = 2900;

  var scroll3 = 3100;
  var scroll4 = 4700;

  var scroll5 = 5600;
}
else if (z.matches&&z2.matches) {
var scroll1 = 400;
var scroll2 = 1100;

var scroll3 = 1101;
var scroll4 = 2400;

var scroll5 = 2401;
}

window.addEventListener('scroll', function () {

// console.log(window.pageYOffset);
var scroll = window.pageYOffset;

if (phoneSize.matches) {
  if (scroll > 0){ 
    babo.style.background = "#212121";
    babo.style.boxShadow = "3px 3px 6px black";
  }
  else {
    babo.style.background = "";
    babo.style.boxShadow = "";
  }
}



if (scroll == 0) {
  quote.style.animation = "moveleft2 0.5s ease-out forwards";
  lista[0].classList.remove("addthis");
  mouse.style.animation = "fade2 1s forwards";
}
if (scroll >= 50) {
  quote.style.animation = "moveleft 0.3s ease-in forwards";
  mouse.style.animation = "fade 0.5s forwards";
  
  removeAni();
}
else {
}
if (scroll >= scroll1 && scroll <= scroll2) {
  lista[0].classList.add("addthis");
}
else {
  lista[0].classList.remove("addthis");
}
if (scroll >= scroll3 && scroll <= scroll4) {
  lista[1].classList.add("addthis");
}
else {
  lista[1].classList.remove("addthis");
}
if (scroll >= scroll5) {
  lista[2].classList.add("addthis");
}
else {
  lista[2].classList.remove("addthis");
}

});

// var btn1 = document.querySelector('.btn1');


// btn1.addEventListener('click', function () {
//   alert("asdad");
//   console.log("asdasd");
// });

// var about = document.querySelector('.btn1').addEventListener("click", () => {
//   alert("asdad");
//   console.log("asdasd");

// });

var kote = document.querySelectorAll('.box2');
var currentQuote = 0;
kote[currentQuote].classList.add("fadeIn");;

function changeQuote() {
  kote[currentQuote].classList.remove("fadeIn");
  kote[currentQuote].classList.add("fadeOut");

    if (currentQuote == kote.length - 1) {
      currentQuote = 0;
    }
    else {
      currentQuote++;
    }

    kote[currentQuote].classList.remove("fadeOut");
    kote[currentQuote].classList.add("fadeIn");
   }

var quoteTimer = setInterval(changeQuote, 8000);


// function function1() {
//   quote.style.animation = "moveleft2 3s ease-out forwards";
//   setTimeout(function2, 2000);
// }
// function function2() {
//   show1.style.background = "red";
// }
// setTimeout(function1, 5000);



















// var x = document.getElementById("show1");
// var y = document.getElementById("show2");
// var z = document.getElementById("show3");
// var c = document.getElementById("show4");
// var lista = document.querySelectorAll("nav li");
// var box = document.getElementById("box");

// // document.addEventListener("DOMContentLoaded", function() {
// //   y.classList.add("addthis2");    // display function on/off
// //   z.classList.add("addthis2");
// //   c.classList.add("addthis2");
// //     });
// var about = document.querySelector('#btn1').addEventListener("click", () => {
//       x.classList.remove("addthis2");   // display function on/off
//       y.classList.add("addthis2");
//       z.classList.add("addthis2");
//       c.classList.add("addthis2");
//       lista[1].classList.remove("addthis");  // line in nav on/off
//       lista[0].classList.remove("addthis");
//       lista[2].classList.remove("addthis");
//       box.style.animation = 'boxmove2 0.2s forwards';
//   });
// var about = document.querySelector('nav ul li:nth-child(1)').addEventListener("click", () => {
//     x.classList.add("addthis2");  // display function on/off
//     y.classList.add("addthis2");
//     z.classList.add("addthis2");
//     c.classList.remove("addthis2");
//     lista[1].classList.remove("addthis");  // line in nav on/off
//     lista[0].classList.add("addthis");
//     lista[2].classList.remove("addthis");
//     box.style.animation = 'boxmove1 0.2s forwards';
//   });
// var about = document.querySelector('nav ul li:nth-child(2)').addEventListener("click", () => {
//   x.classList.add("addthis2");  // display function on/off
//   y.classList.remove("addthis2");
//   z.classList.add("addthis2");
//   c.classList.add("addthis2");
//   lista[1].classList.add("addthis"); // line in nav on/off
//   lista[0].classList.remove("addthis");
//   lista[2].classList.remove("addthis");
//   box.style.animation = 'boxmove1 0.5s forwards';
// });
// var contact = document.querySelector('nav ul li:nth-child(3)').addEventListener("click", () => {
//     x.classList.add("addthis2");  // display function on/off
//     y.classList.add("addthis2");
//     z.classList.remove("addthis2");
//     c.classList.add("addthis2");
//     lista[1].classList.remove("addthis");  // line in nav on/off
//     lista[0].classList.remove("addthis");
//     lista[2].classList.add("addthis");
//     box.style.animation = 'boxmove1 0.5s forwards';
//   });

  // for (let i = 0; i < 4; i++) {
  //   lista.item(i).addEventListener("click", function(){ 
  //       // if (box.style.animation === 'boxmove1 2s linear forwards') {
  //       // box.style.animation = '';
  //       // }
  //       // else {
  //           box.style.animation = 'boxmove1 2s linear forwards';
  //       // }
  //   });
  //   };
  //   ret.addEventListener("click", function(){ 
  //       box.style.animation = 'boxmove2 2s linear forwards';
  //   });





// $( "ul li:nth-child(1)" ).on("click", function(){
//     $("ul li:nth-child(1)").addClass("addthis");
//     $("ul li:nth-child(2)").removeClass("addthis");
//     $("ul li:nth-child(3)").removeClass("addthis");
// });
// $( "ul li:nth-child(2)" ).on("click", function(){
//     $("ul li:nth-child(2)").addClass("addthis");
//     $("ul li:nth-child(1)").removeClass("addthis");
//     $("ul li:nth-child(3)").removeClass("addthis");
// });
// $( "ul li:nth-child(3)" ).on("click", function(){
//     $("ul li:nth-child(3").addClass("addthis");
//     $("ul li:nth-child(2)").removeClass("addthis");
//     $("ul li:nth-child(1)").removeClass("addthis");
// });