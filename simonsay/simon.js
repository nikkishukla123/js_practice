let gameseq = [];
let userseq = [];
 let headings = document.querySelector("#heading")
let started = false;
let level = 0;
let btn = document.querySelector(".pink")
let bodies = document.querySelector("body")
let btns = document.querySelectorAll(".btn")

function startgame () {
    if (started==false) {
        started = true;
        headings.innerText = level+1;
        flashButton(btn);  // calling the function
        
    }
        
       
        
}
bodies.addEventListener("keypress",startgame);

function flashButton(btn) {
    btn.classList.add("flash");  
        // Ab browser: .btn ka normal style .flash ka extra style   👉 dono mila ke show karta hai
    setTimeout(function () {
      btn.classList.remove("flash");
    }, 300);
  }