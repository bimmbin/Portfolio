var babo = document.querySelector("header");
var nab = document.querySelector("nav");
var pindut = document.querySelector(".toggle");
var menu = document.querySelector("nav ul");
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
}



pindutan.addEventListener("click", () => {
  badi.classList.toggle('lightModeBack');
  quote.classList.toggle('boldText');
  mouse.classList.toggle('boldText');
  porm.classList.toggle('lightMode');
  puter.classList.toggle('lightMode');
  puter.classList.toggle('boldText');
  superToggle();
});



quote.style.animation = "moveleft2 0.8s ease-out forwards";

pindut.addEventListener("click", () => {
  pindut.classList.toggle('active');
  menu.classList.toggle('drop');
});

btnPc1.addEventListener("click", () => {
  show2.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  menu.classList.remove('drop');
  pindut.classList.remove('active');
});
btnPc2.addEventListener("click", () => {
  show3.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  menu.classList.remove('drop');
  pindut.classList.remove('active');
});
btnPc3.addEventListener("click", () => {
  show4.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  menu.classList.remove('drop');
  pindut.classList.remove('active');
});
btnHome1.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: 'smooth',})
  menu.classList.remove('drop');
  pindut.classList.remove('active');
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
if (phoneSize.matches) {
  pindutan.addEventListener("click", () => {
  menu.classList.toggle('lightMode');
});
}

window.addEventListener('scroll', function () {

// console.log(window.pageYOffset);
var scroll = window.pageYOffset;

if (phoneSize.matches) {
  if (scroll > 0){ 
    if (badi.classList.contains('lightModeBack')) {
      nab.classList.add('headColorLight');
    } 
    else {
      nab.classList.add("headColorDark");
    }
  }
  else {
    if (badi.classList.contains('lightModeBack')) {
      nab.classList.remove('headColorLight');
    } 
    else {
      nab.classList.remove("headColorDark");
    }
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



