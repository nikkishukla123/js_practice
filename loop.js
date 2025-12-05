// for-of loop
let str = "apnacollege";
size=0;
for(let i of str){   // jitna string hai utni baar chalega
    console.log("i=",i)
    size++
}
console.log("size",size)

//for in loop
let student = {
    name: "rahul",
    age:20,
    cgpa:2.5,
    isPass:true,
}

for(let key in student) {   // ye object ke andar ka key ko print karta hai (key in object)
    console.log("key=",key);
    console.log("value=",student[key]); // this prints value also
}

// Q1 .print all even numbers from 0 to 100
for(i=0; i<=100; i++){
    if(i%2==0){
        console.log(i)
    }
}

//Q2.create a game where you start with any random game number.ask user to keep guessing the game number until he enters correct one
let gamenum = 25

let usernum = prompt("enter a number pagli");  // first we should initialze otherwise it give error

while(usernum!=gamenum){
    usernum = prompt("enter a number pagli");  // after intialize let can be updated
}
console.log("congratulation right number")