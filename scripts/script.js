const show1 = document.querySelector("#show1");
const show2 = document.querySelector("#show2");
const show3 = document.querySelector('#show3');
const show4 = document.querySelector('#show4');
var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var btn3 = document.querySelector('#btn3');
var btn4 = document.querySelector('#home');
lista = document.querySelectorAll("nav ul li");
var quote = document.querySelector('.boxcont2');
var mouse = document.querySelector('.boxcont');


btn1.addEventListener("click", () => {
  show2.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});
btn2.addEventListener("click", () => {
  show3.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
btn3.addEventListener("click", () => {
  show4.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
btn4.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: 'smooth',})
});

window.addEventListener('scroll', function () {

console.log(window.pageYOffset);
var scroll = window.pageYOffset;
if (scroll == 0) {
  lista[0].classList.remove("addthis");
  quote.style.animation = "moveleft2 0.5s ease-out forwards";
  mouse.style.animation = "fade2 1s forwards";
}
else {
}
if (scroll >= 50) {
  quote.style.animation = "moveleft 0.3s ease-in forwards";
  mouse.style.animation = "fade 0.5s forwards";
}
else {
}
if (scroll >= 300 && scroll <=1100) {
  lista[0].classList.add("addthis");
}
else {
  lista[0].classList.remove("addthis");
}
if (scroll >= 1101 && scroll <=2100) {
  lista[1].classList.add("addthis");
}
else {
  lista[1].classList.remove("addthis");
}
if (scroll >= 2101) {
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