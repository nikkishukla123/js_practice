let divs = document.querySelector("div");  // to get the attribute value
let id = divs.getAttribute("id"); // here we get attribute of id
console.log(id)

 divs.setAttribute("id","fox");  // for setting new attribute it directly does not return
console.log(divs.getAttribute("id")) // thus again here we use get attribute to return new value

divs.style.backgroundColor = "blue"  // for changing style
divs.innerText = "hello";

// inserting elemnts
 let newbtn = document.createElement("button");
 newbtn.innerText = "click me"

 divs.append(newbtn);  // adds at the end
//  divs.prepend(newbtn);   // adds at start
divs.after(newbtn)   // div ke pehle ya baad mein
divs.before(newbtn)
// divs.remove()  // for deleting and removing any element

//Q1) create  new button element , give it atext "click me" bg red and textcolour of white
// insert btn as first elemnt inside body tag

let newbtn1 = document.createElement("button")
newbtn1.innerText = " click re";
newbtn1.style.backgroundColor = "pink";
newbtn1.style.color = "violet"
 document.querySelector("body").prepend(newbtn1);  // button ko print ye line karvati hai

//Q2) create a paragrapg tag give a class name and crete a new class using css and then appned both classes usin js
 let paragraph = document.querySelector("p")
// paragraph.getAttribute("class");
// paragraph.setAttribute("class","contents")
paragraph.classList.add("contents");  // this statement add both classes without overwriting as above