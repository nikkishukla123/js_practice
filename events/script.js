// // ****   DOM EVENTS *****
// // ON CLICK

// // let buttons = document.querySelector("button")
// // buttons.onclick = function () {
// //     alert("button clicked")
// // }


// function say() {
//     alert("hello")
// }
// function sayname() {
//     alert("apna college")
// }
// // buttons.onclick = sayhello;  // () ye nahi lgana hai

// // // for more buttons using for lopp
// let buttons = document.querySelectorAll("button")
// // for( button of buttons) {
// //     button.onclick = say; // on click
// //     button.onmouseenter = function () { // ONMOUSEENTER
// //         console.log("you entered a button")
// //     }
// // }

// //** event listener */
// // as above we cannot use onclick event  for printing two thing likhe hello, and apna college
// // thus this is used 
// for( button of buttons) {
//   button.addEventListener("click",say);
//   button.addEventListener("click",sayname);
// }
// thus event listener execute both

// activity
let btn = document.querySelector("button")
let divs = document.querySelector("div")
let heading = document.querySelector("h1")
function randomcolor () {
    let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
  
 divs.style.backgroundColor=(`rgb(${r}, ${g}, ${b})`) ;  // changing colour
   heading.innerText= (`rgb(${r}, ${g}, ${b})`);  // changing heading
}

btn.addEventListener("click",randomcolor) 
// how i have done this activity
// created a function of random color and then added event listener to chnage the colour and heading by clicking on button

// how to use this
// this refers to the same event
