var babo = document.querySelector("header");
var nab = document.querySelector("nav");
var pindut = document.querySelector("#menuToggle");
var ex = document.querySelector(".active");
var menu = document.querySelector(".dropDownMenu");
const show1 = document.querySelector("#show1");
const show2 = document.querySelector("#show2");
const show3 = document.querySelector('#show3');
const show4 = document.querySelector('#show4');
var btnPc1 = document.querySelector('#btnPc1');
var btnPc2 = document.querySelector('#btnPc2');
var btnPc3 = document.querySelector('#btnPc3');
var btnHome1 = document.querySelector('.home1');
var btnHome2 = document.querySelector('.home2');
var lista = document.querySelectorAll("nav ul li");
var quote = document.querySelector('.boxcont2');
var mouse = document.querySelector('.boxcont');


// ---------toggleLightmode---------
var badi = document.querySelector('body');
var pindutan = document.querySelector('.slider');
var projCard = document.querySelectorAll('.projContainer');
var projCard1 = document.querySelectorAll('.span1');
var projCard2 = document.querySelectorAll('.span2');
var porm = document.querySelector('form');
var puter = document.querySelector('footer');
var skillRound = document.querySelectorAll('#show3 ul li');
var burger = document.querySelectorAll('#menuToggle span');
var aa = document.querySelectorAll('.span2 a');
// var quoteText = document.querySelector('body');


var superToggle = function() {
  projCard[0].classList.toggle('lightMode');
  projCard[1].classList.toggle('lightMode');
  projCard[2].classList.toggle('lightMode');
  projCard[0].classList.toggle('boldText');
  projCard[1].classList.toggle('boldText');
  projCard[2].classList.toggle('boldText');

  projCard1[0].classList.toggle('lightMode');
  projCard1[1].classList.toggle('lightMode');
  projCard1[2].classList.toggle('lightMode');

  projCard2[0].classList.toggle('lightMode');
  projCard2[1].classList.toggle('lightMode');
  projCard2[2].classList.toggle('lightMode');

  projCard1[0].classList.toggle('borderColor');
  projCard1[1].classList.toggle('borderColor');
  projCard1[2].classList.toggle('borderColor');

  projCard2[0].classList.toggle('borderColor');
  projCard2[1].classList.toggle('borderColor');
  projCard2[2].classList.toggle('borderColor');

  skillRound[0].classList.toggle('lightMode');
  skillRound[1].classList.toggle('lightMode');
  skillRound[2].classList.toggle('lightMode');
  skillRound[3].classList.toggle('lightMode');
  skillRound[4].classList.toggle('lightMode');
  skillRound[5].classList.toggle('lightMode');
  skillRound[6].classList.toggle('lightMode');
  aa.classList.toggle('lightMode');
}

function removeThis(a) {
  if (badi.classList.contains('lightModeBack')) {
    lista[a].classList.remove("addthis2");
  } 
  else {
    lista[a].classList.remove("addthis");
  }
}
function addThis(a) {
  if (badi.classList.contains('lightModeBack')) {
    lista[a].classList.add("addthis2");
  } 
  else {
    lista[a].classList.add("addthis");
  }
}

function addthisBug(a) {
  if (lista[a].classList.contains('addthis')) {
    lista[a].classList.remove("addthis");
    lista[a].classList.add("addthis2");
  }
}
function addthisBug2(a) {
  if (lista[a].classList.contains('addthis2')) {
    lista[a].classList.remove("addthis2");
    lista[a].classList.add("addthis");
  }
}
function removeAddthis() {
  if (badi.classList.contains('lightModeBack')) {
    for (i = 0; i < 3; i++) {
      addthisBug(i);
    }
  } 
  else {
    for (i = 0; i < 3; i++) {
      addthisBug2(i);
    }
  }
}

pindutan.addEventListener("click", () => {
  badi.classList.toggle('lightModeBack');
  quote.classList.toggle('boldText');
  mouse.classList.toggle('boldText');
  porm.classList.toggle('lightMode');
  puter.classList.toggle('lightMode');
  puter.classList.toggle('boldText');
  superToggle();
  removeAddthis();
});

quote.style.animation = "moveleft2 0.8s ease-out forwards";

pindut.addEventListener("click", () => {
  menu.classList.toggle('drop');
});

btnPc1.addEventListener("click", () => {
  show2.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  menu.classList.remove('drop');
});
btnPc2.addEventListener("click", () => {
  show3.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  menu.classList.remove('drop');
});
btnPc3.addEventListener("click", () => {
  show4.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  menu.classList.remove('drop');
});
btnHome1.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: 'smooth',})
  menu.classList.remove('drop');
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
  var scroll4 = 5300;

  var scroll5 = 5500;
}
else if (z.matches&&z2.matches) {
var scroll1 = 400;
var scroll2 = 1100;

var scroll3 = 1101;
var scroll4 = 2400;

var scroll5 = 2401;
}
if (phoneSize.matches) {

  
  pindutan.addEventListener("click", () => {
  menu.classList.toggle('lightMode');
  if (badi.classList.contains('lightModeBack')) {
    nab.classList.add('headColorLight');
    nab.classList.remove("headColorDark");
    burger[0].style.background = "#000";
    burger[1].style.background = "#000";
    burger[2].style.background = "#000";
  } 
  else {
    nab.classList.add("headColorDark");
    nab.classList.remove('headColorLight');
    burger[0].style.background = "#fff";
    burger[1].style.background = "#fff";
    burger[2].style.background = "#fff";
  }
});
}

window.addEventListener('scroll', function () {

// console.log(window.pageYOffset);
var scroll = window.pageYOffset;

if (phoneSize.matches) {
  if (scroll > 0){ 
    if (badi.classList.contains('lightModeBack')) {
      nab.classList.add('headColorLight');
      nab.classList.remove("headColorDark");
    } 
    else {
      nab.classList.add("headColorDark");
      nab.classList.remove('headColorLight');
    }
  }
  else {
      nab.classList.remove('headColorLight');
      nab.classList.remove("headColorDark");
  }
}


if (scroll == 0) {
  quote.style.animation = "moveleft2 0.5s ease-out forwards";
  removeThis(0);
  mouse.style.animation = "fade2 1s forwards";
}
if (scroll >= 50) {
  quote.style.animation = "moveleft 0.3s ease-in forwards";
  mouse.style.animation = "fade 0.5s forwards";
}
else {
}
if (scroll >= scroll1 && scroll <= scroll2) {
  addThis(0);
}
else {
  removeThis(0);
}
if (scroll >= scroll3 && scroll <= scroll4) {
  addThis(1);
}
else {
  removeThis(1);
}
if (scroll >= scroll5) {
  addThis(2);
}
else {
  removeThis(2);
}

});


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



