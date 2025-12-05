// -----------------------
//  ALL VARIABLES
// -----------------------

// Game ka sequence (ye computer banata hai)
let gameseq = [];

// User ka sequence (buttons click karne par update hota hai)
let userseq = [];

// Heading change karne ke liye
let headings = document.querySelector("#heading");

// Game start hua ya nahi (flag)
let started = false;

// Current level number
let level = 0;

// Saare colored buttons
let btns = document.querySelectorAll(".btn");

// Body for event listener
let bodies = document.querySelector("body");


// -----------------------
//  GAME START FUNCTION
// -----------------------

function startgame() {
    // Game tabhi start hoga jab started == false
    if (started == false) {
        started = true; // game ko on mark kar diya
        nextlevel();    // level 1 se game start hoga
    }
}

// User koi bhi key press kare → game start
bodies.addEventListener("keypress", startgame);


// -----------------------
//  FLASH BUTTON FUNCTION
// -----------------------

// Ye function kisi bhi button ko temporarily flash karega
function flashButton(btn) {
    btn.classList.add("flash"); // flash class add

    // 300ms baad flash hatana
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}



// -----------------------
//  NEXT LEVEL SEQUENCE
// -----------------------

function nextlevel() {

    level++; // level badhao
    headings.innerText = level; // heading update

    // Random color choose karne ke liye colors list
    let colors = ["pink", "yellow", "red", "blue"];

    let randomidx = Math.floor(Math.random() * 4); // 0–3
    let randColor = colors[randomidx]; // koi bhi ek random color

    // Game ke sequence me new color push kar diya
    gameseq.push(randColor);


    // Game ke poore sequence ko ek-ek karke flash karna
    gameseq.forEach(function (color, index) {
        setTimeout(function () {

            // id se button find --> e.g. "pink" id wala button
            let btn = document.getElementById(color);

            // Flash that button
            flashButton(btn);

        }, 500 * index); 
        // Har button alag time pe flash hoga (order ke saath)
    });

    // Naya level start ho chuka hai → userseq ko reset karo
    userseq = [];
}



// -----------------------
//  USER CLICK EVENT
// -----------------------

btns.forEach(function (button) {

    button.addEventListener("click", function () {

        // User ne jo button click kiya uska id (color name) userseq me push
        userseq.push(this.id);

        console.log("game:", gameseq);
        console.log("user:", userseq);

        // Checking function ko latest index bhejna
        checking(userseq.length - 1);
    });
});



// -----------------------
//  CHECKING FUNCTION
// -----------------------

// Ye function decide karta hai ki user ka answer sahi hai ya nahi
function checking(currentIndex) {

    // ❌ 1) Agar wrong click hua → game over
    if (userseq[currentIndex] !== gameseq[currentIndex]) {
        gameOver();
        return;
    }

    // ✔️ 2) Agar abhi tak sahi hai lekin sequence complete nahi hua
    if (userseq.length !== gameseq.length) {
        // Kuch mat karo — bas user ko continue karne do
        return;
    }

    // ⭐ 3) Agar user ne poora sequence sahi kar diya
    setTimeout(function () {
        nextlevel(); // next level start
    }, 1000);
}



// -----------------------
//  GAME OVER FUNCTION
// -----------------------

function gameOver() {

    // Heading par game over message show karo
    headings.innerHTML = `game over ! your score was ${level}`;  // for printing score
     
    // Body ko red flash effect dena
    document.body.classList.add("game-over");
    setTimeout(() => document.body.classList.remove("game-over"), 200);
  document.body.style.color="red";
    // Sab variables reset karna
    started = false;
    level = 0;
    gameseq = [];
    userseq = [];

    // Restart ke liye event listener wapas allow karo:
    bodies.addEventListener("keypress", startgame);
}

