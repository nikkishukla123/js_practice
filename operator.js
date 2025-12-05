// logical operator
let a = 5;
let b= 6;
console.log("condi1 && condi2",a==b && a<b)
console.log("condi1 || condi2",a==b || a<b)
console.log("not equals to",!(a===5)) // false
let age = 20;
// ternary operator
age > 18 ? "adult": "not adult";  // compact if else

alert("hello");  //- Node.js is a server-side runtime, not a browser. It doesn’t have browser-specific functions like alert, prompt, or confirm.

let name = prompt("hello"); // it also take input not only gives alert
console.log(name);

// Q2 get user to input number using prompt and check if it multiply of 5 or not

let number = prompt("enter a number");
if (number%5==0){
    alert("is multiple")
} else {
    alert("not multiple")
}

// Q3 write a code which can give grades to student acc to their scores

let grade = prompt("enter a grade");
if (grade>=80 && grade<=100){
    alert("a")
}  else if(grade>=70 && grade<=89){
    alert("b")
}  else if(grade>=60 && grade<=69){
    alert("c")
}
else if(grade>=50 && grade<=59){
    alert("d")
} 

else {
  alert("f")
}
console.log("hello")