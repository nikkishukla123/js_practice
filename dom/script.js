// window object: it is browser object and it is automatically created by browser, it is aglobal object
// Dom : document model is a sub model in window object and it is use to acess the html tags, all the html tags is in this model
// ye token ko tag mein or phir node mein divide karta hai
// console.log(window)  
// console.dir(document)
// console.log(document) 

let byid = document.getElementById("heading");  // to get by unique

console.log(byid);

let byclass= document.getElementsByClassName("hello"); // to get common one printed
console.log(byclass);

document.getElementsByTagName("p")  // to get by tag name

// query selector
let element=document.querySelector("h1")   // returns first element from tag class or id
console.dir(element)
 let elements=document.querySelectorAll("h1")  // returns all
 console.dir(elements)

 let element1=document.querySelector(".hello")   //  printin using class require . and for id require #
console.dir(element)


//  javascript tags

let div = document.querySelector("div");
console.dir(div.innerHTML);   // tag ke sath print karega
console.dir(div.innerText);     // sirf text print karega
console.dir(div.innerHTML="abcd");    // we can also change , also can change text ,tag
console.dir(heading1.textContent);  // using text content hidden value also seen


//Qs create h2 heading elemnt with text : "hello javascript" append from"apna college students" to this text using js
let hello = document.querySelector("#questions")
console.dir(questions.innerText= questions.innerText+" from apna college"); // first acessing and then performing concatenation

//qs create three div of same class name box add some unique text to each of them
let boxes = document.getElementsByClassName("box");
console.dir(boxes)
boxes[0].innerText="new 1";  // here using indexes 
boxes[1].innerText="new 2";
boxes[2].innerText="new 3";
 
for(box of boxes) {  // can also use for off loop

}

// dom attributes
